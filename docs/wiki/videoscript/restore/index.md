---
title: Video Script Restore
---

# Video Script Restore Endpoint

The video script restore endpoint restores a soft deleted video script and returns the restored video script resource.

For example, the `/restore/videoscript/1` endpoint will restore the soft deleted video script of id '1' and return the restored video script resource.

## URL

```sh
PATCH /restore/videoscript/{id}
```

## Authentication

**Required Permission**: restore video script

**Roles with Permission**: Admin

**Other Requirements**: Video script must be soft deleted

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/videoscript/1
```
