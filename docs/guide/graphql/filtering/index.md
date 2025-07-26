---
title: Filtering
---

# Filtering

---

Most queries provide filtering arguments using the AND operator. Filtering arguments are built using the `{fields}_{filter}` pattern.

## All Filters

| Name    | Fields                                         | Example    | Description                           |
| :-----: | :--------------------------------------------: | :--------: | ------------------------------------- |
| Eq      | String, Int, Float, Boolean, enums, DateTimeTz | name       | Add an `equal` conditim to the query |
| Like    | String                                         | name_like  | Add a `like` condition to the query   |
| In      | Int, Float, enums                              | id_in      | Add an `in` condition to the query    |
| Not in  | Int, Float, enums                              | id_not_in  | Add a `not in` condition to the query |
| Greater | Int, Float, DateTimeTz                         | id_greater | Add a `greater than` condition to the query     |
| Lesser  | Int, Float, DateTimeTz                         | id_lesser  | Add a `less than` condition to the query     |


Query example:
```graphql
query {
    animes(name_like: "%monogatari%") {
        data {
            name
        }
    }
}
```

## Trashed Filter

Queries that return a type implementing soft deletes have a `trashed` filter.

The argument is `trashed: Trashed`, which allows filtering to determine if trashed elements should be fetched.

`Trashed` is an enum with the following values:

| Value        | Description                                  |
| :----------: | :------------------------------------------- |
| ONLY         | Only return trashed results.                 |
| WITH         | Return both trashed and non-trashed results. |
| WITHOUT      | Only return non-trashed results.             |

```graphql
query {
    animes(trashed: ONLY) {
        data {
            name
        }
    }
}
```

## Nested Filtering

Filtering in relationships is applied **ONLY** to the relationship and does not affect the previous root.

```graphql
query {
    animes {
        data {
            name
            animethemes(type: OP) {
                data {
                    type
                    sequence
                }
            }
        }
    }
}
```