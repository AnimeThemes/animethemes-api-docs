---
title: Theme Show
---

<Block>

# Theme Show Endpoint

The theme show endpoint returns a theme resource.

For example, the `/api/theme/3373` endpoint will return the theme resource Bakemonogatari OP1.

## URL

```sh
GET /api/theme/{id}
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
    theme: {
        id: id,
        type: "type",
        sequence: sequence,
        group: "group",
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
curl https://staging.animethemes.moe/api/theme/3373
```
</CURL>

</Example>

</Block>