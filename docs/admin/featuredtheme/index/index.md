---
title: Featured Theme Index
---

# Featured Theme Index Endpoint

The featured theme index endpoint returns a listing of featured theme resources whose start date is on or before the current date.

## URL

```sh
GET /featuredtheme/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                            |
| :----------: | :------: | :--------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                    |
| filter       | No       | Filters for featured theme resources                                   |
| page[number] | No       | The page of featured theme resources to display                        |
| page[size]   | No       | The number of featured theme resources to display for the current page |
| sort         | No       | The list of fields to sort the featured theme resources                |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| start_at   | Sort resources on the resource start date                           |
| end_at     | Sort resources on the resource end date                             |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| start_at   | Filter resources on the resource start date                        |
| end_at     | Filter resources on the resource end date                          |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status [With, Without, Only] |

## Response

```json
{
    featuredthemes: [
        {
            id: id,
            start_at: "start_at",
            end_at: "end_at",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at"
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
curl https://api.animethemes.moe/featuredtheme/
```
