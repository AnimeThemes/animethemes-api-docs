---
title: AnimeTheme Show
---

<Block>

# AnimeTheme Show Endpoint

The AnimeTheme show endpoint returns an AnimeTheme resource.

For example, the `/api/animetheme/3373` endpoint will return the AnimeTheme resource Bakemonogatari OP1.

## URL

```sh
GET /api/animetheme/{id}
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
    animetheme: {
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
curl https://staging.animethemes.moe/api/animetheme/3373
```
</CURL>

</Example>

</Block>