---
title: Pagination
---

# Pagination

---

The AnimeThemes API query that uses pagination shall contain a `pageInfo` object for pagination strategies and a `nodes` collection with the resources.

The top-level fields that use pagination are singular and have the `Connection` suffix.

It uses a cursor-based connection pattern.
Read about it in the [graphql.org](https://graphql.org/learn/pagination/#pagination-and-edges)
and [relay.dev](https://relay.dev/graphql/connections.htm) documentations if you don't know what it is.

## Arguments

For queries with connections available, there is a `pagination` input argument with the following fields:

| Name      | Type     | Default  | Max      | Description                               |
| :-------: | :------: | :------: | :------: | ----------------------------------------- |
| first     | Int      | 15       | 100      | Limits number of fetched items            |
| last      | Int      | 15       | 100      | Limits number of fetched items            |
| after     | String   | null     |          | Cursor for the first item in the page     |
| before    | String   | null     |          | Cursor for the last item in the page      |

## Query

The following query
```graphql
query {
    animeConnection(pagination: { first: 2 }) {
        pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
        }
        nodes {
            title {
                romaji
            }
        }
    }
}
```
will return the JSON:
```json
{
    "data": {
        "animeConnection": {
            "pageInfo": {
                "hasPreviousPage": false,
                "hasNextPage": true,
                "startCursor": "eyJ2YWx1ZXMiOlt7IkJpZ1Vuc2lnbmVkIjoxfV19",
                "endCursor": "eyJ2YWx1ZXMiOlt7IkJpZ1Vuc2lnbmVkIjoyfV19"
            },
            "nodes": [
                {
                    "title": {
                        "romaji": ".hack//Liminality"
                    }
                },
                {
                    "title": {
                        "romaji": ".hack//roots"
                    }
                }
            ]
        }
    }
}