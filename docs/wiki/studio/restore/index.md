---
title: Studio Restore
---

# Studio Restore Endpoint

The studio restore endpoint restores a soft deleted studio and returns the restored studio resource.

For example, the `/restore/studio/shaft` endpoint will restore the soft deleted Shaft studio and return the restored Shaft resource.

## URL

```sh
PATCH /restore/studio/{slug}
```

## Authentication

**Required Permission**: restore studio

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    studio: {
        id: id,
        name: "name",
        slug: "slug",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/studio/shaft
```
