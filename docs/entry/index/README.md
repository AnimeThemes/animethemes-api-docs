---
title: Entry Index
---

<Block>

# Entry Index Endpoint

The entry index endpoint returns a listing of entry resources.

## URL

```sh
GET /api/entry/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for entry resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources                                      |
| q            | No       | The query to search for matching entry resources                              |
| page[size]   | No       | The number of entry resources to display for the current page                 |
| page[number] | No       | The page of entry resources to display                                        |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| version    | Sort resources on the version number of the entry                   |
| episodes   | Sort resources on the episodes that the theme is used for           |
| nsfw       | Sort resources on nsfw content                                      |
| spoiler    | Sort resources on spoiler content                                   |
| notes      | Sort resources on additional information for the entry              |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| version    | Filter resources on the version number of the entry                |
| episodes   | Filter resources on the episodes that the theme is used for        |
| nsfw       | Filter resources on nsfw content                                   |
| spoiler    | Filter resources on spoiler content                                |
| notes      | Filter resources on additional information for the entry           |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status {With, Without, Only} |

## Response

```json
{
    entries: [
        {
            id: id,
            version: version,
            episodes: "episodes",
            nsfw: nsfw,
            spoiler: spoiler,
            notes: "notes",
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
curl https://staging.animethemes.moe/api/entry/
```
</CURL>

</Example>

</Block>