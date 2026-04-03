---
title: Performance Index
---

# Performance Index Endpoint

The performance index endpoint returns a listing of performance resources.

## URL

```sh
GET /performance/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| filter       | No       | Filters for anime resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                |
| page[number] | No       | The page of anime resources to display                                        |
| page[size]   | No       | The number of anime resources to display for the current page                 |
| q            | No       | The query to search for matching anime resources                              |
| sort         | No       | The list of fields to sort the resources                                      |

## Allowed Sort Fields

|    Name      | Description                                                                |
| :----------: | :------------------------------------------------------------------------- |
| id           | Sort resources on the primary key                                          |
| alias        | Sort resources on distinguishing label for performance by alias            |
| as           | Sort resources on distinguishing label for performance by character        |
| member_alias | Sort resources on distinguishing label for performance by member alias     |
| member_as    | Sort resources on distinguishing label for performance by member character |
| relevance    | Sort resources on distinguishing label for performance by relevance        |
| created_at   | Sort resources on the resource creation date                               |
| updated_at   | Sort resources on the resource last modified date                          |
| deleted_at   | Sort resources on the resource deletion date                               |
| random       | Sort resources randomly. Ignored if other sort fields are provided.        |

## Filters

|    Name      | Description                                                        |
| :----------: | :----------------------------------------------------------------- |
| id           | Filter resources on the primary key                                |
| alias        | Filter resources on the alias of the performance                   |
| as           | Filter resources on the character of the performance               |
| member_alias | Filter resources on the member alias of the performance            |
| member_as    | Filter resources on the member character of the performance        |
| relevance    | Filter resources on the relevance of the performance               |
| created_at   | Filter resources on the resource creation date                     |
| updated_at   | Filter resources on the resource last modified date                |
| deleted_at   | Filter resources on the resource deletion date                     |
| trashed      | Filter resources on trashed (deleted) status [With, Without, Only] |
| has          | Filter resources on relations within allowed include paths         |

## Response

```json
{
    performances: [
        {
            id: id,
            alias: "alias",
            as: "as",
            member_alias: "member_alias",
            member_as: "member_as",
            relevance: relevance,
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
curl https://api.animethemes.moe/performance/
```
