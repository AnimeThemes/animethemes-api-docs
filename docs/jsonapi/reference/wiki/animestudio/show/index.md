---
title: Anime Studio Show
---

# Anime Studio Show Endpoint

The anime studio show endpoint returns an anime studio resource.

For example, the `/animestudio/bakemonogatari/shaft` endpoint will return the anime studio resource for the association between the Bakemonogatari anime and the Shaft studio.

## URL

```sh
GET /animestudio/{anime:slug}/{studio:slug}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    animestudio: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/animestudio/bakemonogatari/shaft
```
