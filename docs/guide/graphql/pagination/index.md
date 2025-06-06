---
title: Pagination
---

# Pagination

---

The AnimeThemes API query that uses pagination shall contain a `paginatorInfo` object for pagination strategies and a `data` collection with the resources.

```json
// The animes query contains a paginatorInfo object
{
    "data": {
        "animes": {
            "paginatorInfo": {
                "count": count,
                "currentPage": currentPage,
                "firstItem": firstItem,
                "hasMorePages": hasMorePages,
                "lastItem": lastItem,
                "lastPage": lastPage,
                "perPage": perPage,
                "total": total
            },
            "data": [
                ...
            ]
        }
    }
}