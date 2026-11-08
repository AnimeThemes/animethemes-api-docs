---
title: Getting Started
---

# Getting Started

---

The AnimeThemes API selectively implements the [**GraphQL Tool**](https://graphql.org).

Here we will provide an overview of where the AnimeThemes API adheres to or deviates from the specification.

It is recommended that you learn how to wrap a [GraphQL API](https://graphql.org/learn/).

## Content Negotiation

The AnimeThemes API needs `Content-Type: application/json` and `User-Agent` headers.

```powershell
# A simple curl request works like this. Note: curl automatically sets a User-Agent header.
curl -X POST
    -H "Content-Type: application/json"
    -d "{\"query\": \"{ animeConnection { nodes { title { romaji } } } }\"}"
    https://rs.animethemes.moe/graphql
```

## Document Structure

### Top Level

The AnimeThemes API specifies a custom `nodes` wrap for top-level members that use pagination.

The following query
```graphql
query {
    animeConnection {
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
            "nodes": [
                {
                    "title" {
                        "romaji": ".hack//Liminality"
                    }
                },
                ...
            ]
        }
    }
}
```