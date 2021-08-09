---
title: Anime Index
---

<Block>

# Anime Index Endpoint

The anime index endpoint returns a listing of anime resources.

## URL

```sh
GET /api/anime/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for anime resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources                                      |
| q            | No       | The query to search for matching anime resources                              |
| page[size]   | No       | The number of anime resources to display for the current page                 |
| page[number] | No       | The page of anime resources to display                                        |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| name       | Sort resources on the title of the anime                            |
| slug       | Sort resources on the URL slug of the anime                         |
| year       | Sort resources on the premiere year of the anime                    |
| season     | Sort resources on the premiere season of the anime                  |
| synopsis   | Sort resources on the brief summary of the anime                    |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| name       | Filter resources on the title of the anime                         |
| slug       | Filter resources on the URL slug of the anime                      |
| year       | Filter resources on the premiere year of the anime                 |
| season     | Filter resources on the premiere season of the anime               |
| synopsis   | Filter resources on the brief summary of the anime                 |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status {With, Without, Only} |

## Response

```json
{
    anime: [
        {
            id: id,
            name: "name",
            slug: "slug",
            year: year,
            season: "season",
            synopsis: "synopsis",
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
curl https://staging.animethemes.moe/api/anime/
```
</CURL>

</Example>

</Block>