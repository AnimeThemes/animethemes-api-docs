---
title: Studio Store
---

# Studio Store Endpoint

The studio store endpoint creates a new studio and returns the new studio resource.

For example, the `/studio?name=Shaft&slug=shaft` endpoint will create a new Shaft studio and return the new Shaft resource.

## URL

```sh
POST /studio
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

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/studio/
```
