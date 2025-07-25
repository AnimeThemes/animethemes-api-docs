---
title: Relationships
---

# Relationships

---

The AnimeThemes API implements relationships for most types, previously known as allowed included in the REST API.

// TODO: Waiting API refactor: pagination everywhere.

## Many-to-Many

A many-to-many relationship has a `edges` list that contains edge objects.

The edge object contains the pivot fields of the relationship and a `node` object that references the related type.

Both fields `createdAt` and `updatedAt` are available for every many-to-many relationship.

The following query
```graphql
query {
    animes {
        data {
            name
            resources {
                edges {
                    node {
                        link
                    }
                    as
                    createdAt
                    updatedAt
                }
            }
        }
    }
}
```
will return the JSON:
```json
{
    "data": {
        "animes": {
            "data": [
                {
                    "name": ".hack//Liminality",
                    "resources": {
                        "edges": [
                            {
                                "node": {
                                    "link": "https://myanimelist.net/anime/299"
                                },
                                "as": null,
                                "createdAt": "2021-03-27T00:46:24+00:00",
                                "updatedAt": "2021-03-27T00:46:24+00:00"
                            }
                            ...
                        ]
                    }
                }
                ...
            ]
        }
    }
}
```