---
title: Page Update
---

# Page Update Endpoint

The page update endpoint updates a page and returns the updated page resource.

For example, the `/page/encoding?body=Lorem+Ipsum` endpoint will update the Encoding page body attribute and return the updated Encoding resource.

## URL

```sh
PUT|PATCH /page/{slug}
```

## Authentication

**Required Permission**: update page

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Page must not be soft deleted

## Parameters

| Name     | Required | Rules                                                |
| :------: | :------: | :--------------------------------------------------- |
| name     | No       | string, max:192                                      |
| slug     | No       | string, max:192, regex:/^[\pL\pM\pN\/_-]+$/u, unique |
| body     | No       | string, max:16777215                                 |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/page/encoding
```
