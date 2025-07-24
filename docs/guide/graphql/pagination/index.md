---
title: Pagination
---

# Pagination

---

The AnimeThemes API query that uses pagination shall contain a `paginatorInfo` object for pagination strategies and a `data` collection with the resources.


## Arguments
There are two arguments available for every query that uses pagination.

* first: Int! = 15

Limits number of fetched items. Default value: 15. Maximum allowed value: 100.

* page: Int

The offset from which items are returned.

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