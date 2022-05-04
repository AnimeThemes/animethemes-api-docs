---
title: Wiki Show
---

<Block>

# Wiki Show Endpoint

The wiki show endpoint returns the wiki resource.

## URL

```sh
GET /api/config/wiki
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
    wiki: {
        featured_theme: "featured_theme",
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/config/wiki
```
</CURL>

</Example>

</Block>