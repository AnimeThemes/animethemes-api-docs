---
title: Anime Theme Entry Store
---

# Anime Theme Entry Store Endpoint

The anime theme entry store endpoint creates a new anime theme entry and returns the new anime theme entry resource.

For example, the `/animethemeentry?theme_id=3378&version=2` endpoint will create a new V2 entry for the ED theme of the Bakemonogatari anime and return the new anime theme resource.

## URL

```sh
POST /animethemeentry
```

## Authentication

**Required Permission**: create anime theme entry

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name     | Required | Rules                          |
| :------: | :------: | :----------------------------- |
| theme_id | Yes      | integer, Anime Theme ID exists |
| version  | No       | integer, min:0                 |
| episodes | No       | string, max:192                |
| nsfw     | No       | boolean                        |
| spoiler  | No       | boolean                        |
| notes    | No       | string, max:192                |

## Response

```json
{
    animethemeentry: {
        id: id,
        version: version,
        episodes: "episodes",
        nsfw: nsfw,
        spoiler: spoiler,
        notes: "notes",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animethemeentry/
```
