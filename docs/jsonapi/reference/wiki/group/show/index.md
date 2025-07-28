---
title: Group Show
---

# Group Show Endpoint

The group show endpoint returns a group resource.

For example, the `/group/1` endpoint will return the group resource for the English Version group.

## URL

```sh
GET /group/{id}
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
    group: {
        id: id,
        name: "name",
        slug: "slug",
        video_filename: "video_filename",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/group/1
```
