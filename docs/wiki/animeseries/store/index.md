---
title: Anime Series Store
---

# Anime Series Store Endpoint

The anime series store endpoint creates a new anime series and returns the new anime series resource.

For example, the `/animeseries/bakemonogatari/monogatari` endpoint will create a new association between the Bakemonogatari anime and the Monogatari series.

## URL

```sh
POST /animeseries/{anime:slug}/{series:slug}
```

## Authentication

**Required Permission**: create anime, create series

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    animeseries: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeseries/bakemonogatari/monogatari
```
