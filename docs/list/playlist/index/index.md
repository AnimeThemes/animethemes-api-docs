---
title: Playlist Index
---

# Playlist Index Endpoint

The playlist index endpoint returns a listing of public playlist resources.

## URL

```sh
GET /playlist/
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
| q            | No       | The query to search for matching playlist resources                              |
| sort         | No       | The list of fields to sort the resources                                         |

## Allowed Sort Fields

|    Name       | Description                                                         |
| :-----------: | :------------------------------------------------------------------ |
| id            | Sort resources on the primary key                                   |
| name          | Sort resources on the title of the playlist                         |
| description   | Sort resources on the description of the playlist                   |
| visibility    | Sort resources on the visibility state of the playlist              |
| views_count   | Sort resources on the number of recorded views                      |
| tracks_exists | Sort resources on the existence of tracks                           |
| tracks_count  | Sort resources on the number of tracks                              |
| created_at    | Sort resources on the resource creation date                        |
| updated_at    | Sort resources on the resource last modified date                   |
| random        | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name       | Description                                                                          |
| :-----------: | :----------------------------------------------------------------------------------- |
| id            | Filter resources on the primary key                                                  |
| name          | Filter resources on the title of the playlist                                        |
| description   | Filter resources on the description of the playlist                                  |
| visibility    | Filter resources on the visibility state of the playlist [Public, Private, Unlisted] |
| views_count   | Filter resources on the number of recorded views                                     |
| tracks_exists | Filter resources on existence of tracks                                              |
| tracks_count  | Filter resources on the number of tracks                                             |
| created_at    | Filter resources on the resource creation date                                       |
| updated_at    | Filter resources on the resource last modified date                                  |
| has           | Filter resources on relations within allowed include paths                           |

## Response

```json
{
    playlists: [
        {
            id: "id",
            name: "name",
            description: "description",
            visibility: "visibility",
            created_at: "created_at",
            updated_at: "updated_at",
            views_count: views_count,
            tracks_exists: tracks_exists,
            tracks_count: tracks_count
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
curl https://api.animethemes.moe/playlist/
```