---
title: Relationships
---

# Relationships

---

The AnimeThemes API implements relationships for most types, previously known as allowed included in the REST API.

The many-to-many, one-to-many and polymorphic one-to-many relationships apply pagination.

## Many-to-One (BelongsTo)

A many-to-one relationship has a object that references the foreign type.

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

An one-to-many relationship has a list of objects that reference the related type.

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

## Polymorphic Many-to-One (MorphTo)

An union type indicates that a field might have multiple object types.

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