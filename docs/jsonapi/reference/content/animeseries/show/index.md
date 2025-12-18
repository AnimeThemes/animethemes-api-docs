---
title: Anime Series Show
---

# Anime Series Show Endpoint

The anime series show endpoint returns an anime series resource.

For example, the `/animeseries/bakemonogatari/monogatari` endpoint will return the anime series resource for the association between the Bakemonogatari anime and the Monogatari series.

## URL

```sh
GET /animeseries/{anime:slug}/{series:slug}
```

## Authentication

None

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
curl https://api.animethemes.moe/animeseries/bakemonogatari/monogatari
```
