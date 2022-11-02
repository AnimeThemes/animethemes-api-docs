---
title: Song Restore
---

# Song Restore Endpoint

The song restore endpoint restores a soft deleted song and returns the restored song resource.

For example, the `/restore/song/3373` endpoint will restore the soft deleted "staple stable" song and return the restored "staple stable" resource.

## URL

```sh
PATCH /restore/song/{id}
```

## Authentication

**Required Permission**: restore song

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    song: {
        id: id,
        title: "title",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/song/3373
```
