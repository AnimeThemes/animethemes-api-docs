---
title: Anime Series Destroy
---

# Anime Series Destroy Endpoint

The anime series destroy endpoint deletes an anime series and returns the deleted anime series resource.

For example, the `/animeseries/bakemonogatari/monogatari` endpoint will delete the association between the Bakemonogatari anime and the Monogatari series.

## URL

```sh
DELETE /animeseries/{anime:slug}/{series:slug}
```

## Authentication

**Required Permission**: delete anime, delete series

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeseries/bakemonogatari/monogatari
```
