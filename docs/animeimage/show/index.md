---
title: Anime Image Show
---

# Anime Image Show Endpoint

The anime image show endpoint returns an anime image resource.

For example, the `/animeimage/bakemonogatari/435` endpoint will return the anime image resource for the association between the Bakemonogatari anime and the large cover image of id 435.

## URL

```sh
GET /animeimage/{anime:slug}/{image:id}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    animeimage: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/animeimage/bakemonogatari/435
```
