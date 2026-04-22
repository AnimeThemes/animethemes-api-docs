---
title: Getting Started
---

# Getting Started

---

The AnimeThemes API selectively implements the [**GraphQL Tool**](https://graphql.org).

Here we will provide an overview of where the AnimeThemes API adheres to or deviates from the specification.

It is recommended that you learn how to wrap a [GraphQL API](https://graphql.org/learn/).

## Content Negotiation

The AnimeThemes API needs a `Content-Type` header.

```powershell
# A simple curl request works like this.
curl -X POST
    -H "Content-Type: application/json"
    -d "{\"query\": \"{ animePagination { data { name } } }\"}"
    https://graphql.animethemes.moe/
```

## Document Structure

### Top Level

The AnimeThemes API specifies a custom `data` wrap for top-level members that use pagination.

The following query
```graphql
query {
    animePagination {
        data {
            name
        }
    }
}
```
will return the JSON:
```json
{
    "data": {
        "animePagination": {
            "data": [
                {
                    "name": ".hack//Liminality"
                },
                ...
            ]
        }
    }
}
```