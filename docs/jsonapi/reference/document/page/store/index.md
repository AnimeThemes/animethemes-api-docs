---
title: Page Store
---

# Page Store Endpoint

The page store endpoint creates a new page and returns the new page resource.

For example, the `/page?name=Encoding&slug=encoding&body=Lorem+Ipsum` endpoint will create a new Encoding page and return the new Encoding resource.

## URL

```sh
POST /page
```

## Authentication

**Required Permission**: create page

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name     | Required | Rules                                                |
| :------: | :------: | :--------------------------------------------------- |
| name     | Yes      | string, max:192                                      |
| slug     | Yes      | string, max:192, regex:/^[\pL\pM\pN\/_-]+$/u, unique |
| body     | Yes      | string, max:16777215                                 |

## Response

```json
{
    page: {
        id: id,
        name: "name",
        slug: "slug",
        body: "body",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/page/
```
