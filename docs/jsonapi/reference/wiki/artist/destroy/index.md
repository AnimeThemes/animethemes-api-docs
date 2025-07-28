---
title: Artist Destroy
---

# Artist Destroy Endpoint

The artist destroy endpoint soft deletes an artist and returns the deleted artist resource.

For example, the `/artist/chiwa_saitou` endpoint will soft delete the Chiwa Saitou artist and return the deleted Chiwa Saitou resource.

## URL

```sh
DELETE /artist/{slug}
```

## Authentication

**Required Permission**: delete artist

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: Artist must not be soft deleted

## Parameters

None

## Response

```json
{
    artist: {
        id: id,
        name: "name",
        slug: "slug",
        information: "information",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/artist/chiwa_saitou
```
