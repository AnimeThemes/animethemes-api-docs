---
title: Relationships
---

# Relationships

---

The AnimeThemes API implements relationships for most types, previously known as "allowed includes" in the JSON:API.

The many-to-many relationships apply connections. The one-to-many relationships apply simple pagination.

## One-to-Many

A one-to-many relationship has a list of objects that reference the related type.
And an inverse one-to-many relationship has a unique object that references the related type.

```graphql
query($slug: String!) {
    anime(slug: $slug) {
        animethemes {
            sequence
            animethemeentries(first: 1, version: 1) { # Inverse One-to-Many
                version
            }
            anime { # One-to-Many
                name
            }
        }
    }
}
```

## Many-to-Many

Every many-to-many relationship applies connection pagination and has three top fields.
Read about it in the [graphql.org](https://graphql.org/learn/pagination/#pagination-and-edges)
and [relay.dev](https://relay.dev/graphql/connections.htm) documentations if you don't know what it is.

The `pageInfo` field provides pagination information.

The `nodes` field returns a list of objects that reference the related type.
Use this field if you don't care about the pivot fields of the relationship.

The `edges` field returns a list of `edge` objects.
The `edge` object always contains a `node` field that returns a singular object of the related type,
and the pivot fields of the relationship.

Both fields `createdAt` and `updatedAt` are available for every many-to-many relationship.

The following query
```graphql
query {
    anime(slug: "hibike_euphonium") {
        name
        series {
            pageInfo { # Pagination
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
                total
                count
                currentPage
                lastPage
            }
            nodes { # Without pivot fields
                name
            }
            edges { # With pivot fields
                node {
                    name
                }
                createdAt
                updatedAt
            }
        }
    }
}
```
will return the JSON:
```json
{
    "data": {
        "anime": {
            "name": "Hibike! Euphonium",
            "series": {
                "pageInfo": {
                    "hasNextPage": false,
                    "hasPreviousPage": false,
                    "startCursor": "MQ==",
                    "endCursor": "MQ==",
                    "total": 1,
                    "count": 1,
                    "currentPage": 1,
                    "lastPage": 1
                },
                "nodes": [
                    {
                        "name": "Hibike! Euphonium"
                    }
                ],
                "edges": [
                    {
                        "node": {
                            "name": "Hibike! Euphonium"
                        },
                        "createdAt": "2021-03-27 01:58:45",
                        "updatedAt": "2021-03-27 01:58:45"
                    }
                ]
            }
        }
    }
}
```

## Polymorphic Many-to-Many

The polymorphic many-to-many relationship uses the same strategy as the usual [many-to-many](#many-to-many-belongstomany).

The following query
```graphql
query {
    anime(slug: "hibike_euphonium") {
        name
        resources {
            pageInfo { # Pagination
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
                total
                count
                currentPage
                lastPage
            }
            nodes { # Without pivot fields
                link
            }
            edges { # With pivot fields
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
```
will return the JSON:
```json
{
    "data": {
        "anime": {
            "name": "Hibike! Euphonium",
            "resources": {
                "pageInfo": {
                    "hasNextPage": false,
                    "hasPreviousPage": false,
                    "startCursor": "MQ==",
                    "endCursor": "OQ==",
                    "total": 9,
                    "count": 9,
                    "currentPage": 1,
                    "lastPage": 1
                },
                "nodes": [
                    {
                        "link": "https://myanimelist.net/anime/27989"
                    },
                    ...
                ],
                "edges": [
                    {
                        "node": {
                            "link": "https://myanimelist.net/anime/27989"
                        },
                        "as": null,
                        "createdAt": "2021-03-26T21:49:16+00:00",
                        "updatedAt": "2021-03-26T21:49:16+00:00"
                    }
                    ...
                ]
            }
        }
    }
}
```