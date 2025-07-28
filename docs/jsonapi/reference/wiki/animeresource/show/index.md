---
title: Anime Resource Show
---

# Anime Resource Show Endpoint

The anime resource show endpoint returns an anime resource resource.

For example, the `/animeresource/bakemonogatari/1083` endpoint will return the anime resource resource for the association between the Bakemonogatari anime and the external resource of id 1083.

## URL

```sh
GET /animeresource/{anime:slug}/{resource:id}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    animeresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/animeresource/bakemonogatari/1083
```
