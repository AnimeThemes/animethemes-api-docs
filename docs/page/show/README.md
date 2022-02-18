---
title: Page Show
---

<Block>

# Page Show Endpoint

The page show endpoint returns a page resource.

## URL

```sh
GET /api/page/{slug}
```

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
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/page/encoding/audio_normalization
```
</CURL>

</Example>

</Block>