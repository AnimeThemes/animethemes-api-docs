---
title: Sorting
---

# Sorting

---

Most queries provide a unique `sort` argument to manage resource sorting.
This argument accepts a list of `{type}Sort` enum cases.

To sort in ascending order, the field name is enough.

To sort in descending order, append `_DESC` to the field name.

## Query

```graphql
query {
    animeConnection(sort: TITLE_ROMAJI) { # Sorting in ascending direction.
        nodes {
            title {
                romaji
            }
        }
    }

    animeConnection(sort: TITLE_ROMAJI_DESC) { # Sorting in descending direction.
        nodes {
            title {
                romaji
            }
        }
    }
}
```

## Multiple Sorting

By providing a list of enum cases, the sort will be applied in the order of the values provided by the client.

```graphql
{
    animeConnection(sort: [YEAR_DESC, SEASON]) {
        nodes {
            year
            season
        }
    }
}
```