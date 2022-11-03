---
title: Announcement Restore
---

# Announcement Restore Endpoint

The announcement restore endpoint restores a soft deleted announcement and returns the restored announcement resource.

For example, the `/restore/announcement/1` endpoint will restore the soft deleted announcement of id '1' and return the restored announcement resource.

## URL

```sh
PATCH /restore/announcement/{id}
```

## Authentication

**Required Permission**: restore announcement

**Roles with Permission**: Admin

**Other Requirements**: Announcement must be soft deleted

## Parameters

None

## Response

```json
{
    announcement: {
        id: id,
        content: "content",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/announcement/1
```
