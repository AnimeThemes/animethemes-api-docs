---
title: Anime Synonym Index
---

<Block>

# Anime Synonym Index Endpoint

The anime synonym index endpoint returns a listing of anime synonym resources.

## URL

```sh
GET /api/animesynonym/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                     |
| :----------: | :------: | :------------------------------------------------------------------------------ |
| fields       | No       | Sparse fieldsets for resource types                                             |
| filter       | No       | Filters for synonym resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                  |
| page[number] | No       | The page of synonym resources to display                                        |
| page[size]   | No       | The number of synonym resources to display for the current page                 |
| q            | No       | The query to search for matching synonym resources                              |
| sort         | No       | The list of fields to sort the resources                                        |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| text       | Sort resources on the alternate title or common abbreviation        |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| text       | Filter resources on the alternate title or common abbreviation     |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status {With, Without, Only} |
| has        | Filter resources on relations within allowed include paths         |

## Response

```json
{
    animesynonyms: [
        {
            id: id,
            text: "text",
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

<Example>

<CURL>
```bash
curl https://api.animethemes.moe/animesynonym/
```
</CURL>

</Example>

</Block>