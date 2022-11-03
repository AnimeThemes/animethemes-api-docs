---
title: Artist Restore
---

# Artist Restore Endpoint

The artist restore endpoint restores a soft deleted artist and returns the restored artist resource.

For example, the `/restore/artist/chiwa_saito` endpoint will restore the soft deleted Chiwa Saito artist and return the restored Chiwa Saito resource.

## URL

```sh
PATCH /restore/artist/{slug}
```

## Authentication

**Required Permission**: restore artist

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Artist must be soft deleted

## Parameters

None

## Response

```json
{
    artist: {
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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/artist/chiwa_saito
```
