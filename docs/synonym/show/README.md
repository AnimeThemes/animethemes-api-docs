---
title: Synonym Show
---

<Block>

# Synonym Show Endpoint

The synonym show endpoint returns a synonym resource.

For example, the `/api/synonym/1523` endpoint will return the synonym resource "Ghostory" for the anime Bakemonogatari.

## URL

```sh
GET /api/synonym/{id}
```

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| include | No       | Inclusion of related resources                          |
| filter  | No       | Filters to constrain the inclusion of related resources |

## Response

```json
{
    synonym: {
        id: id,
        text: "text",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/synonym/1523
```
</CURL>

</Example>

</Block>