---
title: Series Show
---

# Series Show Endpoint

The series show endpoint returns a series resource.

For example, the `/series/monogatari` endpoint will return the series resource for the Monogatari series.

## URL

```sh
GET /series/{slug}
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

## Example

```bash
curl https://api.animethemes.moe/series/monogatari
```
