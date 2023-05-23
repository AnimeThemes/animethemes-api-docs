---
title: Featured Theme Restore
---

# Featured Theme Restore Endpoint

The featured theme restore endpoint restores a soft deleted featured theme and returns the restored featured theme resource.

For example, the `/restore/featuredtheme/1` endpoint will restore the soft deleted featured theme of id '1' and return the restored featured theme resource.

## URL

```sh
PATCH /restore/featuredtheme/{id}
```

## Authentication

**Required Permission**: restore featured theme

**Roles with Permission**: Admin

**Other Requirements**: Featured Theme must be soft deleted

## Parameters

None

## Response

```json
{
    featuredtheme: {
        id: id,
        start_at: "start_at",
        end_at: "end_at",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/featuredtheme/1
```
