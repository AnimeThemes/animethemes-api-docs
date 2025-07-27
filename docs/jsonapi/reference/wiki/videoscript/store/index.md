---
title: Video Script Store
---

# Video Script Store Endpoint

The video script store endpoint creates a new video script and returns the new video script resource.

For example, the `/videoscript?path=2009/Summer/Bakemonogatari-OP1.txt` endpoint will create a new video script and return the new video script resource.

## URL

```sh
POST /videoscript
```

## Authentication

**Required Permission**: create video script

**Roles with Permission**: Encoder, Admin

## Parameters

| Name      | Required | Rules                    |
| :-------: | :------: | :----------------------- |
| path      | Yes      | string, max:192          |
| video_id  | No       | integer, Video ID exists |

## Response

```json
{
    videoscript: {
        id: id,
        path: "path",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        link: "link"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/videoscript/
```
