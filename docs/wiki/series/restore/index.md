---
title: Series Restore
---

# Series Restore Endpoint

The series restore endpoint restores a soft deleted series and returns the restored series resource.

For example, the `/restore/series/monogatari` endpoint will restore the soft deleted Monogatari series and return the restored Monogatari resource.

## URL

```sh
PATCH /restore/series/{slug}
```

## Authentication

**Required Permission**: restore series

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Series must be soft deleted

## Parameters

None

## Response

```json
{
    series: {
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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/series/monogatari
```
