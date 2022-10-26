---
title: Anime Synonym Update
---

# Anime Synonym Update Endpoint

The anime synonym update endpoint updates an anime synonym and returns the updated anime synonym resource.

For example, the `/animesynonym/1523?text=Monstory` endpoint will update the Monstory anime synonym text attribute and return the updated anime synonym resource.

## URL

```sh
PUT|PATCH /animesynonym/{id}
```

## Authentication

**Required Permission**: update anime synonym

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                    |
| :------: | :------: | :----------------------- |
| anime_id | No       | integer, Anime ID exists |
| text     | No       | string, max:192          |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/animesynonym/1523
```
