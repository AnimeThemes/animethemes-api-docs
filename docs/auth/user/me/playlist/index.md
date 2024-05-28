---
title: My Playlists
---

# My Playlists Endpoint

The my playlists endpoint returns a listing of playlist resources owned by the currently authenticated user.

## URL

```sh
GET /me/playlist/
```

## Authentication

**Required Permission**: view playlist

## Parameters

| Name         | Required | Description                                                                      |
| :----------: | :------: | :------------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                              |
| filter       | No       | Filters for playlist resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                   |
| page[number] | No       | The page of playlist resources to display                                        |
| page[size]   | No       | The number of playlist resources to display for the current page                 |
| sort         | No       | The list of fields to sort the resources                                         |

## Allowed Sort Fields

|    Name     | Description                                                         |
| :---------: | :------------------------------------------------------------------ |
| id          | Sort resources on the primary key                                   |
| name        | Sort resources on the title of the playlist                         |
| description | Sort resources on the description of the playlist                   |
| visibility  | Sort resources on the visibility state of the playlist              |
| created_at  | Sort resources on the resource creation date                        |
| updated_at  | Sort resources on the resource last modified date                   |
| deleted_at  | Sort resources on the resource deletion date                        |
| random      | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name     | Description                                                                          |
| :---------: | :----------------------------------------------------------------------------------- |
| id          | Filter resources on the primary key                                                  |
| name        | Filter resources on the title of the playlist                                        |
| description | Filter resources on the description of the playlist                                  |
| visibility  | Filter resources on the visibility state of the playlist [Public, Private, Unlisted] |
| created_at  | Filter resources on the resource creation date                                       |
| updated_at  | Filter resources on the resource last modified date                                  |
| deleted_at  | Filter resources on the resource deletion date                                       |
| trashed     | Filter resources on trashed (deleted) status [With, Without, Only]                   |
| has         | Filter resources on relations within allowed include paths                           |

## Response

```json
{
    playlists: [
        {
            id: id,
            name: "name",
            description: "description",
            visibility: "visibility",
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
curl -H "Authorization: Bearer {token}" https://api.animethemes.moe/me/playlist/
```