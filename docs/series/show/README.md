---
title: Series Show
---

<Block>

# Series Show Endpoint

The series show endpoint returns a series resource.

For example, the `/api/series/monogatari` endpoint will return the series resource for the Monogatari series.

## URL

```sh
GET /api/series/{slug}
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| filter  | No       | Filters to constrain the inclusion of related resources |
| include | No       | Inclusion of related resources                          |
| sort    | No       | Sort related resources                                  |

## Response

```json
{
    series: {
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
curl https://staging.animethemes.moe/api/series/monogatari
```
</CURL>

</Example>

</Block>