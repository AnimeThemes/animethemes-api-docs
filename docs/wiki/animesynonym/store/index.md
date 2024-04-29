---
title: Anime Synonym Store
---

# Anime Synonym Store Endpoint

The anime synonym store endpoint creates a new anime synonym and returns the new anime synonym resource.

For example, the `/animesynonym?anime_id=218&text=Monstory` endpoint will create a new Monstory synonym for the Bakemonogatari anime and return the new anime synonym resource.

## URL

```sh
POST /animesynonym
```

## Authentication

**Required Permission**: create anime synonym

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name     | Required | Rules                    |
| :------: | :------: | :----------------------- |
| anime_id | Yes      | integer, Anime ID exists |
| text     | Yes      | string, max:192          |

## Response

```json
{
    animesynonym: {
        id: id,
        text: "text",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animesynonym/
```
