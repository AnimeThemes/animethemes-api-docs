---
title: Series Update
---

<Block>

# Series Update Endpoint

The series update endpoint updates a series and returns the updated series resource.

For example, the `/api/series/monogatari?name=Monogatari` endpoint will update the Monogatari series name attribute and return the updated Monogatari resource.

## URL

```sh
PUT|PATCH /api/series/{slug}
```

## Authentication

**Required Permission**: update series

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                               |
| :------: | :------: | :---------------------------------- |
| name     | Yes      | string, max:192                     |
| slug     | Yes      | string, max:192, alpha_dash, unique |

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

<Example>

<CURL>
```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/series/monogatari
```
</CURL>

</Example>

</Block>