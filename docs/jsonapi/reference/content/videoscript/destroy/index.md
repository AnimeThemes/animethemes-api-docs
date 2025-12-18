---
title: Video Script Destroy
---

# Video Script Destroy Endpoint

The video script destroy endpoint soft deletes a video script and returns the deleted video script resource.

For example, the `/videoscript/1` endpoint will soft delete the video script of id '1' and return the deleted video script resource.

## URL

```sh
DELETE /videoscript/{id}
```

## Authentication

**Required Permission**: delete video script

**Roles with Permission**: Encoder, Admin

**Other Requirements**: Video script must not be soft deleted

## Parameters

None

## Response

```json
{
    videoscript: {
        id: id,
        path: "path",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        link: "link
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/videoscript/1
```
