---
title: Anime Theme Show
---

# Anime Theme Show Endpoint

The anime theme show endpoint returns an anime theme resource.

For example, the `/animetheme/3373` endpoint will return the OP1 anime theme resource for the Bakemonogatari anime.

## URL

```sh
GET /animetheme/{id}
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
    animetheme: {
        id: id,
        type: "type",
        sequence: sequence,
        slug: "slug",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/animetheme/3373
```
