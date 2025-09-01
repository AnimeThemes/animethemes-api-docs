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
query {
    animePagination(sort: NAME) { # Sorting in ascending direction.
        data {
            name
        }
    }

    animePagination(sort: NAME_DESC) { # Sorting in descending direction.
        data {
            name
        }
    }
}
```

## Nested Sorting

In one-to-many relationships, it is possible to sort the through a relation.
For example, sort animethemes by their song title.

```graphql
query {
    anime(slug: "hibike_euphonium") {
        animethemes(sort: SONG_TITLE) {
            song {
                title
            }
        }
    }
}
```

## Relationship Sorting

It is possible to sort the relationships of the parent type.

```graphql
query {
    anime(slug: "hibike_euphonium") {
        resources(sort: EXTERNAL_ID) {
            nodes {
                externalId
            }
        }
    }
}
```

## Multiple Sorting

By providing a list of enum cases, the sort will be applied in the order of the values provided by the client.

```graphql
{
    animePagination(sort: [YEAR_DESC, SEASON]) {
        data {
            year
            season
        }
    }
}
```