---
title: Anime Image Store
---

# Anime Image Store Endpoint

The anime image store endpoint creates a new anime image and returns the new anime image resource.

For example, the `/animeimage/bakemonogatari/435` endpoint will create a new association between the Bakemonogatari anime and the large cover image of id 435.

## URL

```sh
POST /animeimage/{anime:slug}/{image:id}
```

## Authentication

**Required Permission**: create anime, create image

**Roles with Permission**: Wiki Editor, Admin

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeimage/bakemonogatari/435
```
