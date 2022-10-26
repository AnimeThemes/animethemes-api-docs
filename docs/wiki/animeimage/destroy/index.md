---
title: Anime Image Destroy
---

# Anime Image Destroy Endpoint

The anime image destroy endpoint deletes an anime image and returns the deleted anime image resource.

For example, the `/animeimage/bakemonogatari/435` endpoint will delete the association between the Bakemonogatari anime and the large cover image of id 435.

## URL

```sh
DELETE /animeimage/{anime:slug}/{image:id}
```

## Authentication

**Required Permission**: delete anime, delete image

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeimage/bakemonogatari/435
```
