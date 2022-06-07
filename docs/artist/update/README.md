---
title: Artist Update
---

<Block>

# Artist Update Endpoint

The artist update endpoint updates an artist and returns the updated artist resource.

For example, the `/api/artist/chiwa_saito?name=Chiwa+Saito` endpoint will update the Chiwa Saito artist name attribute and return the updated Chiwa Saito resource.

## URL

```sh
PUT|PATCH /api/artist/{slug}
```

## Authentication

**Required Permission**: update artist

**Roles with Permission**: Wiki Editor, Admin

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

<Example>

<CURL>
```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/artist/chiwa_saito
```
</CURL>

</Example>

</Block>