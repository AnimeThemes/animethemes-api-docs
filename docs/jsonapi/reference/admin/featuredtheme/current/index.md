---
title: Current Featured Theme Show
---

# Current Featured Theme Show Endpoint

The current featured theme show endpoint returns the first featured theme where the current date is between start_at and end_at dates.

## URL

```sh
GET /current/featuredtheme/
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
curl https://api.animethemes.moe/current/featuredtheme/
```
