---
title: Announcement Index
---

# Announcement Index Endpoint

The announcement index endpoint returns a listing of announcement resources.

## URL

```sh
GET /announcement/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                          |
| :----------: | :------: | :----------------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                                  |
| filter       | No       | Filters for announcement resources & constraining the inclusion of related resources |
| page[number] | No       | The page of announcement resources to display                                        |
| page[size]   | No       | The number of announcement resources to display for the current page                 |
| sort         | No       | The list of fields to sort the announcement resources                                |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| content    | Sort resources on the announcement text                             |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| content    | Filter resources on the announcement text                          |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |

## Response

```json
{
    announcements: [
        {
            id: id,
            content: "content",
            created_at: "created_at",
            updated_at: "updated_at"
        },
        ...
    ],
    links: {
        first: "first",
        last: "last",
        prev: "prev",
        next: "next"
    },
    meta: {
        current_page: current_page,
        from: from,
        path: "path",
        per_page: per_page,
        to: to
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/announcement/
```
