---
title: AnimeTheme Index
---

<Block>

# AnimeTheme Index Endpoint

The AnimeTheme index endpoint returns a listing of AnimeTheme resources.

## URL

```sh
GET /api/animetheme/
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
| type       | Sort resources on the type of the sequence                          |
| sequence   | Sort resources on the numeric ordering                              |
| group      | Sort resources on the distinguishing of themes to dubs, etc         |
| slug       | Sort resources on the URL slug of the theme                         |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Allowed Relation Sort Fields

|     Name     | Description                                                            |
| :----------: | :--------------------------------------------------------------------- |
| anime.season | Sort resources on the season of the anime that the resource belongs to | 
| anime.year   | Sort resources on the year of the anime that the resource belongs to   |
| song.title   | Sort resources on the title of the song that the resource belongs to   |

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
| has        | Filter resources on relations within allowed include paths         |

## Response

```json
{
    animethemes: [
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
curl https://staging.animethemes.moe/api/animetheme/
```
</CURL>

</Example>

</Block>