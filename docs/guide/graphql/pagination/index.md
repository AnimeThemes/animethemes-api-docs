---
title: Pagination
---

# Pagination

---

The AnimeThemes API query that uses pagination shall contain a `paginatorInfo` object for pagination strategies and a `data` collection with the resources.


## Arguments

There are two arguments available for every query that uses pagination.

| Name      | Type     | Default  | Max      | Description                               |
| :-------: | :------: | :------: | :------: | ----------------------------------------- |
| first     | Int!     | 15       | 100      | Limits number of fetched items            |
| page      | Int      | 1        | lastPage | The offset from which items are returned  |

## Query

The following query
```graphql
query {
    animes(first: 15, page: 1) {
        paginatorInfo {
            count
            currentPage
            firstItem
            hasMorePages
            lastItem
            lastPage
            perPage
            total
        }
        data {
            name
        }
    }
}
```
will return a JSON like:
```json
{
    "data": {
        "animes": {
            "paginatorInfo": {
                "count": 2,
                "currentPage": 1,
                "firstItem": 1,
                "hasMorePages": true,
                "lastItem": 2,
                "lastPage": 2317,
                "perPage": 2,
                "total": 4633
            },
            "data": [
                {
                    "name": ".hack//Liminality"
                },
                {
                    "name": ".hack//roots"
                }
            ]
        }
    }
}