---
title: Artist Store
---

<Block>

# Artist Store Endpoint

The artist store endpoint creates a new artist and returns the new artist resource.

For example, the `/api/artist?name=Chiwa+Saito&slug=chiwa_saito` endpoint will create a new Chiwa Saito artist and return the new Chiwa Saito resource.

## URL

```sh
POST /api/artist
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

<Example>

<CURL>
```bash
curl -X POST -H "Authorization: Bearer {token}" https://staging.animethemes.moe/api/artist/
```
</CURL>

</Example>

</Block>