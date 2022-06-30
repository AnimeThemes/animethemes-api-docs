---
title: Anime Theme Entry Update
---

<Block>

# Anime Theme Entry Update Endpoint

The anime theme entry update endpoint updates an anime theme entry and returns the updated anime theme entry resource.

For example, the `/animethemeentry/3822?episodes=11-14` endpoint will update the episodes attribute of the V2 entry for the ED theme of the Bakemonogatari anime and return the updated anime theme entry resource.

## URL

```sh
PUT|PATCH /animethemeentry/{id}
```

## Authentication

**Required Permission**: update anime theme entry

**Roles with Permission**: Wiki Editor, Admin

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

<Example>

<CURL>
```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/animethemeentry/3822
```
</CURL>

</Example>

</Block>