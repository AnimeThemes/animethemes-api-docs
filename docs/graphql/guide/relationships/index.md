---
title: Relationships
---

# Relationships

---

The AnimeThemes API implements relationships for most types, previously known as "allowed includes" in the REST API.

The many-to-many, one-to-many, and polymorphic one-to-many relationships apply pagination.

## Many-to-One (BelongsTo)

A many-to-one relationship has an object that references the foreign type.

```graphql
query {
    animethemes {
        data {
            sequence
            anime {
                name
            }
        }
    }
}
```

## One-to-Many (HasMany)

A one-to-many relationship has a list of objects that reference the related type.

```graphql
query {
    animes {
        data {
            name
            animethemes(first: 2) {
                data {
                    sequence
                }
            }
        }
    }
}
```

## Many-to-Many (BelongsToMany)

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
    animes {
        data {
            name
            resources {
                pageInfo { # Pagination
                    total
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
                        "pageInfo": {
                            "total": 6
                        },
                        "nodes": [
                            {
                                "link": "https://myanimelist.net/anime/299"
                            },
                            ...
                        ],
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

## Polymorphic Many-to-One (MorphTo)

A union type indicates that a field might have multiple object types.

```graphql
query {
    performances {
        data {
            artist {
                ... on Artist {
                    name
                }
                ... on Membership {
                    group {
                        name
                    }
                    member {
                        name
                    }
                }
            }
        }
    }
}
```

## Polymorphic One-to-Many (MorphMany)

The inverse relationship of polymorphic many-to-one. Applies pagination.

```graphql
query {
    memberships {
        data {
            performances {
                data {
                    alias
                    as
                }
            }
        }
    }
}
```