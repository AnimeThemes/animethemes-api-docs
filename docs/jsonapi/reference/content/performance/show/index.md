---
title: Performance Show
---

# Performance Show Endpoint

The performance show endpoint returns a performance resource.

For example, the `/performance/3373` endpoint will return the performance resource for the X performance.

## URL

```sh
GET /performance/{id}
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
    performance: {
        id: id,
        alias: "alias",
        as: "as",
        member_alias: "member_alias",
        member_as: "member_as",
        relevance: relevance,
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/performance/3373
```
