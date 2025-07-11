---
title: Featured Theme Show
---

# Featured Theme Show Endpoint

The featured theme show endpoint returns a featured theme resource.

## URL

```sh
GET /featuredtheme/{id}
```

## Authentication

**Other Requirements**: The start_at date must be on or before the current date

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
    featuredtheme: {
        id: id,
        start_at: "start_at",
        end_at: "end_at",
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/featuredtheme/1
```
