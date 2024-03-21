---
title: Dump Restore
---

# Dump Restore Endpoint

The dump restore endpoint restores a soft deleted dump and returns the restored dump resource.

For example, the `/restore/dump/1` endpoint will restore the soft deleted dump of id '1' and return the restored dump resource.

## URL

```sh
PATCH /restore/dump/{id}
```

## Authentication

**Required Permission**: restore dump

**Roles with Permission**: Admin

**Other Requirements**: Dump must be soft deleted

## Parameters

None

## Response

```json
{
    dump: {
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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/dump/1
```
