---
title: Anime Image Store
---

<Block>

# Anime Image Store Endpoint

The anime image store endpoint creates a new anime image and returns the new anime image resource.

For example, the `/animeimage?anime_id=218&image_id=435` endpoint will create a new association between the Bakemonogatari anime and the large cover image of id 435.

## URL

```sh
POST /animeimage
```

## Authentication

**Required Permission**: create anime, create image

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                    |
| :------: | :------: | :----------------------- |
| anime_id | Yes      | integer, Anime ID exists |
| image_id | Yes      | integer, Image ID exists |

## Response

```json
{
    animeimage: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

<Example>

<CURL>
```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeimage/
```
</CURL>

</Example>

</Block>