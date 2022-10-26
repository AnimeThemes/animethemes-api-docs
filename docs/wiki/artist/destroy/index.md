---
title: Artist Destroy
---

# Artist Destroy Endpoint

The artist destroy endpoint soft deletes an artist and returns the deleted artist resource.

For example, the `/artist/chiwa_saito` endpoint will soft delete the Chiwa Saito artist and return the deleted Chiwa Saito resource.

## URL

```sh
DELETE /artist/{slug}
```

## Authentication

**Required Permission**: delete artist

**Roles with Permission**: Wiki Editor, Admin

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/artist/chiwa_saito
```
