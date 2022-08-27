---
title: Anime Theme Store
---

# Anime Theme Store Endpoint

The anime theme store endpoint creates a new anime theme and returns the new anime theme resource.

For example, the `/animetheme?anime_id=218&type=OP&sequence=1&slug=OP1` endpoint will create a new OP1 theme for the Bakemonogatari anime and return the new anime theme resource.

## URL

```sh
POST /animetheme
```

## Authentication

**Required Permission**: create anime theme

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                       |
| :------: | :------: | :-------------------------- |
| anime_id | Yes      | integer, Anime ID exists    |
| type     | Yes      | EnumValue [OP, ED]          |
| sequence | No       | integer, min:0              |
| group    | No       | string, max:192             |
| slug     | Yes      | string, max:192, alpha_dash |
| song_id  | No       | integer, Song ID exists     |

## Response

```json
{
    animetheme: {
        id: id,
        type: "type",
        sequence: sequence,
        group: "group",
        slug: "slug",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animetheme/
```
