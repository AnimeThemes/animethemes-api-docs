---
title: Artist Index
---

<Block>

# Artist Index Endpoint

The artist index endpoint returns a listing of artist resources.

## URL

```sh
GET /api/artist/
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

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| name       | Sort resources on the title of the artist                           |
| slug       | Sort resources on the URL slug of the artist                        |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| name       | Filter resources on the title of the artist                        |
| slug       | Filter resources on the URL slug of the artist                     |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status {With, Without, Only} |
| has        | Filter resources on relations within allowed include paths         |

## Response

```json
{
    artists: [
        {
            id: id,
            name: "name",
            slug: "slug",
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
curl https://api.animethemes.moe/artist/
```
</CURL>

</Example>

</Block>