---
title: Dump Index
---

# Dump Index Endpoint

The dump index endpoint returns a listing of dump resources.

## URL

```sh
GET /dump/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                  |
| :----------: | :------: | :----------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                          |
| filter       | No       | Filters for dump resources                                   |
| page[number] | No       | The page of dump resources to display                        |
| page[size]   | No       | The number of dump resources to display for the current page |
| sort         | No       | The list of fields to sort the dump resources                |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| path       | Sort resources on the path of the file in storage                   |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| path       | Filter resources on the path of the file in storage                |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status [With, Without, Only] |

## Response

```json
{
    dumps: [
        {
            id: id,
            path: "path",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at",
            link: "link"
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
curl https://api.animethemes.moe/dump/
```
