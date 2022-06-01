---
title: Series Store
---

<Block>

# Series Store Endpoint

The series store endpoint creates a new series and returns the new series resource.

For example, the `/api/series?name=Monogatari&slug=monogatari` endpoint will create a new Monogatari series and return the new Monogatari resource.

## URL

```sh
POST /api/series
```

## Authentication

**Required Permission**: create series

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/series/
```
</CURL>

</Example>

</Block>