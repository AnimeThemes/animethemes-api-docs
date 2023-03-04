---
title: Anime Studio Store
---

# Anime Studio Store Endpoint

The anime studio store endpoint creates a new anime studio and returns the new anime studio resource.

For example, the `/animestudio?anime_id=218&studio_id=11` endpoint will create a new association between the Bakemonogatari anime and the Shaft studio.

## URL

```sh
POST /animestudio
```

## Authentication

**Required Permission**: create anime, create studio

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name      | Required | Rules                     |
| :-------: | :------: | :------------------------ |
| anime_id  | Yes      | integer, Anime ID exists  |
| studio_id | Yes      | integer, Studio ID exists |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animestudio/
```
