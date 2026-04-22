---
title: Filtering
---

# Filtering

---

Most queries provide some filtering arguments using the AND operator. Filtering arguments are built using the `{field}_{filter}` case pattern.

Query example:
```graphql
query {
    animePagination(name_like: "%monogatari%") {
        data {
            name
        }
    }
}
```

## Relationship Filtering

Filtering in relationships is applied **ONLY** to the relationship and does not affect the previous root.

```graphql
query {
    anime(slug: "hibike_euphonium") {
        name
        animethemes(type: OP) {
            type
            sequence
        }
    }
}
```

## Advanced Filtering

The where argument allows you to apply flexible and composable filters to pagination queries.
It supports single conditions, logical operators, and nested filters.

```graphql
query {
    animePagination(
        where: {
            column: SEASON,
            operator: NEQ,
            value: FALL
        }
    ) {
        data {
            name
            season
        }
    }
}
```

### Logical Operators

Logical operators (AND, OR) can be nested to build complex filter trees, allowing advanced query expressions with precise control over result sets.

Query example:
```graphql
query {
    # Returns all anime where the season is either WINTER or FALL.
    animePagination(
        where: {
            OR: [
                {
                    column: SEASON,
                    operator: EQ,
                    value: WINTER,
                },
                {
                    column: SEASON,
                    operator: EQ,
                    value: FALL,
                }
            ]
        }
    ) {
        data {
            name
            season
        }
    }
}
```

### Comparison Operators

| Value       | Description                                                                    |
| :---------: | :----------------------------------------------------------------------------- |
| EQ          | Matches values that are exactly equal to the given value.                      |
| NEQ         | Matches values that are not equal to the given value.                          |
| LT          | Matches values less than the given value.                                      |
| GT          | Matches values greater than the given value.                                   |
| LTE         | Matches values less than or equal to the given value.                          |
| GTE         | Matches values greater than or equal to the given value.                       |
| LIKE        | Matches values that partially match the given pattern (using wildcard search). |
| NOT_LIKE    | Matches values that do not match the given pattern.                            |
| IN          | Matches values that are within the given values.                               |
| NOT_IN      | Matches values that are not within the given values.                           |
| BETWEEN     | Matches values that are within a range of the given values.                    |
| NOT_BETWEEN | Matches values that are not within a range of the given values.                |
| IS_NULL     | Matches values that are null.                                                  |
| IS_NOT_NULL | Matches values that are not null.                                              |