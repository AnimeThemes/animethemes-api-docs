---
title: Theme Index
---

<Block>

# Theme Index Endpoint

The theme index endpoint returns a listing of theme resources.

## URL

```sh
GET /api/theme/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for theme resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources                                      |
| q            | No       | The query to search for matching theme resources                              |
| page[size]   | No       | The number of theme resources to display for the current page                 |
| page[number] | No       | The page of theme resources to display                                        |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| type       | Sort resources on the type of the sequence                          |
| sequence   | Sort resources on the numeric ordering                              |
| group      | Sort resources on the distinguishing of themes to dubs, etc         |
| slug       | Sort resources on the URL slug of the theme                         |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| type       | Filter resources on the type of the sequence                       |
| sequence   | Filter resources on the numeric ordering                           |
| group      | Filter resources on the distinguishing of themes to dubs, etc      |
| slug       | Filter resources on the URL slug of the theme                      |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status {With, Without, Only} |

## Response

```json
{
    themes: [
        {
            id: id,
            type: "type",
            sequence: sequence,
            group: "group",
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
curl https://staging.animethemes.moe/api/theme/
```
</CURL>

</Example>

</Block>