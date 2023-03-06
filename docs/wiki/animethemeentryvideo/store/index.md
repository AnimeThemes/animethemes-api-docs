---
title: Anime Theme Entry Video Store
---

# Anime Theme Entry Video Store Endpoint

The anime theme entry video store endpoint creates a new anime theme entry video and returns the new anime theme entry video resource.

For example, the `/animethemeentryvideo?entry_id=3814&video_id=2712` endpoint will create a new association between the Bakemonogatari OP1 anime theme entry and the Bakemonogatari-OP1.webm video.

## URL

```sh
POST /animethemeentryvideo
```

## Authentication

**Required Permission**: create anime theme entry, create video

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                    |
| :------: | :------: | :----------------------- |
| entry_id | Yes      | integer, Entry ID exists |
| video_id | Yes      | integer, Video ID exists |

## Response

```json
{
    animethemeentryvideo: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animethemeentryvideo/
```
