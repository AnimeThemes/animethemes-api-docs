---
title: Relationships
---

# Relationships

---

The AnimeThemes API implements relationships for most types, previously known as "allowed includes" in the REST API.

The many-to-many relationships apply connections. The one-to-many relationships apply simple pagination.

## One-to-Many (HasMany)

A one-to-many relationship has a list of objects that reference the related type.

```graphql
query {
    anime(slug: "hibike_euphonium") {
        name
        animethemes(first: 2, type: OP) {
            sequence
        }
    }
}
```

## Inverse One-to-Many (BelongsTo)

An inverse one-to-many relationship has an object that references the foreign type.

```graphql
query {
    animethemePagination {
        data {
            sequence
            anime {
                name
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
    anime(slug: "hibike_euphonium") {
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
```
will return the JSON:
```json
{
    "data": {
        "anime": {
            "name": "Hibike! Euphonium",
            "resources": {
                "pageInfo": {
                    "total": 9
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

## Polymorphic One-to-Many (MorphMany)

The relationship of polymorphic one-to-many. Applies simple pagination.

```graphql
query {
    membershipPagination {
        data {
            performances {
                alias
                as
            }
        }
    }
}
```

## Polymorphic inverse One-to-Many (MorphTo)

The inverse type of polymorphic one-to-many.
A union type indicates that a field might have multiple object types.

```graphql
query {
    performancePagination {
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