---
title: Group Restore
---

# Group Restore Endpoint

The group restore endpoint restores a soft deleted group and returns the restored group resource.

For example, the `/restore/group/1` endpoint will restore the soft deleted "English Version" group and return the restored "English Version" resource.

## URL

```sh
PATCH /restore/group/{id}
```

## Authentication

**Required Permission**: restore group

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: Group must be soft deleted

## Parameters

None

## Response

```json
{
    group: {
        id: id,
        name: "name",
        slug: "slug",
        video_filename: "video_filename",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/group/1
```
