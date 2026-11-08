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
        themes {
            sequence
            entries { # Inverse One-to-Many
                version
            }
            anime { # One-to-Many
                title {
                    romaji
                }
            }
        }
    }
}
```

## Many-to-Many

Every many-to-many relationship applies connection pagination and has three top fields.

The `pageInfo` field provides pagination information.

The `nodes` field returns a list of objects that reference the related type.
Use this field if you don't care about the pivot fields of the relationship.

The `edges` field returns a list of `edge` objects.
The `edge` object always contains a `node` field that returns a singular object of the related type,
and the pivot fields of the relationship.

The following query
```graphql
query {
    anime(slug: "hibike_euphonium") {
        title {
            romaji
        }
        series {
            pageInfo { # Pagination
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            nodes { # Without pivot fields
                title {
                    romaji
                }
            }
            edges { # With pivot fields
                node {
                    title {
                        romaji
                    }
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
            "title": {
                "romaji": "Hibike! Euphonium"
            },
            "series": {
                "pageInfo": {
                    "hasNextPage": false,
                    "hasPreviousPage": false,
                    "startCursor": "68",
                    "endCursor": "68",
                },
                "nodes": [
                    {
                        "title": {
                            "romaji": "Hibike! Euphonium"
                        }
                    }
                ],
                "edges": [
                    {
                        "node": {
                            "title": {
                                "romaji": "Hibike! Euphonium"
                            }
                        },
                        "createdAt": "2021-03-27T04:58:45.326449+00:00",
                        "updatedAt": "2021-03-27T04:58:45.326449+00:00"
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
        title {
            romaji
        }
        resources {
            pageInfo { # Pagination
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
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
            "title": {
                "romaji": "Hibike! Euphonium"
            },
            "resources": {
                "pageInfo": {
                    "hasNextPage": false,
                    "hasPreviousPage": false,
                    "startCursor": "2008",
                    "endCursor": "32353",
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
                        "createdAt": "2021-03-27T00:49:16.206425+00:00",
                        "updatedAt": "2021-03-27T00:49:16.206425+00:00"
                    }
                    ...
                ]
            }
        }
    }
}
```