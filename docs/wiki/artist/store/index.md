---
title: Artist Store
---

# Artist Store Endpoint

The artist store endpoint creates a new artist and returns the new artist resource.

For example, the `/artist?name=Chiwa+Saito&slug=chiwa_saitou` endpoint will create a new Chiwa Saitou artist and return the new Chiwa Saitou resource.

## URL

```sh
POST /artist
```

## Authentication

**Required Permission**: create artist

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                               |
| :------: | :------: | :---------------------------------- |
| name     | Yes      | string, max:192                     |
| slug     | Yes      | string, max:192, alpha_dash, unique |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/artist/
```
