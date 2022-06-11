---
title: Studio Store
---

<Block>

# Studio Store Endpoint

The studio store endpoint creates a new studio and returns the new studio resource.

For example, the `/api/studio?name=Shaft&slug=shaft` endpoint will create a new Shaft studio and return the new Shaft resource.

## URL

```sh
POST /api/studio
```

## Authentication

**Required Permission**: create studio

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                               |
| :------: | :------: | :---------------------------------- |
| name     | Yes      | string, max:192                     |
| slug     | Yes      | string, max:192, alpha_dash, unique |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/studio/
```
</CURL>

</Example>

</Block>