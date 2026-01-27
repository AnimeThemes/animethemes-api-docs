---
title: Filtering
---

# Filtering

---

Most queries provide filtering arguments using the AND operator. Filtering arguments are built using the `{field}_{filter}` pattern.

## Filter Arguments

| Name    | Fields                                         | Example    | Description                                     |
| :-----: | :--------------------------------------------: | :--------: | ----------------------------------------------- |
| Eq      | String, Int, Float, Boolean, enums, DateTimeTz | name       | Add an `equal` conditim to the query            |
| Like    | String                                         | name_like  | Add a `like` condition to the query             |
| In      | Int, Float, enums                              | id_in      | Add an `in` condition to the query              |
| Not in  | Int, Float, enums                              | id_not_in  | Add a `not in` condition to the query           |
| Greater | Int, Float, DateTimeTz                         | id_greater | Add a `greater than` condition to the query     |
| Lesser  | Int, Float, DateTimeTz                         | id_lesser  | Add a `less than` condition to the query        |


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

## Trashed Filter

Queries that return a type implementing soft deletes have a `trashed` filter.

The argument is `trashed: TrashedFilter`, which allows filtering to determine if trashed elements should be fetched.

`TrashedFilter` is an enum with the following values:

| Value        | Description                                  |
| :----------: | :------------------------------------------- |
| ONLY         | Only return trashed results.                 |
| WITH         | Return both trashed and non-trashed results. |
| WITHOUT      | Only return non-trashed results.             |

```graphql
query {
    animePagination(trashed: ONLY) {
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
            field: SEASON,
            operator: NE,
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
                    field: SEASON,
                    operator: EQ,
                    value: WINTER,
                },
                {
                    field: SEASON,
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

::: info
Aggregate filters (such as count/exists) do not work when combined with logical operators.
:::

### Comparison Operators

| Value   | Description                                                                    |
| :-----: | :----------------------------------------------------------------------------- |
| EQ      | Matches values that are exactly equal to the given value.                      |
| NE      | Matches values that are not equal to the given value.                          |
| LT      | Matches values less than the given value.                                      |
| GT      | Matches values greater than the given value.                                   |
| LTE     | Matches values less than or equal to the given value.                          |
| GTE     | Matches values greater than or equal to the given value.                       |
| LIKE    | Matches values that partially match the given pattern (using wildcard search). |
| NOTLIKE | Matches values that do not match the given pattern.                            |