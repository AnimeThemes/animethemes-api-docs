---
title: Sorting
---

# Sorting

---

Most queries provide a unique `sort` argument to manage resource sorting.
This argument accepts a list of `{type}SortableColumns` enum cases.

To sort in ascending order, the field name is enough.

To sort in descending order, append `_DESC` to the field name.

## Query

```graphql
{
    animes(sort: NAME) { # Sorting in ascending direction.
        data {
            name
        }
    }

    animes(sort: NAME_DESC) { # Sorting in descending direction.
        data {
            name
        }
    }
}
```

## Nested Sorting

It is possible to sort the relationships of the parent type.

```graphql
{
    animes {
        data {
            resources(sort: EXTERNAL_ID) {
                nodes {
                    externalId
                }
            }
        }
    }
}
```

## Multiple Sorting

By providing a list of enum cases, the sort will be applied in the order of the values provided by the client.

```graphql
{
    animes(sort: [YEAR_DESC, SEASON]) {
        data {
            year
            season
        }
    }
}
```