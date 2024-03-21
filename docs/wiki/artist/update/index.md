---
title: Artist Update
---

# Artist Update Endpoint

The artist update endpoint updates an artist and returns the updated artist resource.

For example, the `/artist/chiwa_saitou?name=Chiwa+Saito` endpoint will update the Chiwa Saitou artist name attribute and return the updated Chiwa Saitou resource.

## URL

```sh
PUT|PATCH /artist/{slug}
```

## Authentication

**Required Permission**: update artist

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Artist must not be soft deleted

## Parameters

| Name     | Required | Rules                               |
| :------: | :------: | :---------------------------------- |
| name     | No       | string, max:192                     |
| slug     | No       | string, max:192, alpha_dash, unique |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/artist/chiwa_saitou
```
