---
title: Video Script Update
---

# Video Script Update Endpoint

The video script update endpoint updates a video script and returns the updated video script resource.

For example, the `/videoscript/1?path=2009/Summer/Bakemonogatari-OP1.txt` endpoint will update the video script path attribute and return the updated video script resource.

## URL

```sh
PUT|PATCH /videoscript/{id}
```

## Authentication

**Required Permission**: update video script

**Roles with Permission**: Admin

## Parameters

| Name      | Required | Rules                    |
| :-------: | :------: | :----------------------- |
| path      | No       | string, max:192          |
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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/videoscript/1
```
