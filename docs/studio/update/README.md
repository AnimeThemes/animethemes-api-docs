---
title: Studio Update
---

<Block>

# Studio Update Endpoint

The studio update endpoint updates a studio and returns the updated studio resource.

For example, the `/api/studio/shaft?name=Shaft` endpoint will update the Shaft studio name attribute and return the updated Shaft resource.

## URL

```sh
PUT|PATCH /api/studio/{slug}
```

## Authentication

**Required Permission**: update studio

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                               |
| :------: | :------: | :---------------------------------- |
| name     | No       | string, max:192                     |
| slug     | No       | string, max:192, alpha_dash, unique |

## Response

```json
{
    studio: {
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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/studio/shaft
```
</CURL>

</Example>

</Block>