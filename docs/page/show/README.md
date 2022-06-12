---
title: Page Show
---

<Block>

# Page Show Endpoint

The page show endpoint returns a page resource.

For example, the `/api/page/encoding` endpoint will return the Encoding page resource.

## URL

```sh
GET /api/page/{slug}
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |

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

<Example>

<CURL>
```bash
curl https://api.animethemes.moe/page/encoding
```
</CURL>

</Example>

</Block>