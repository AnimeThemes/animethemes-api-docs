---
title: Playlist Track Index
---

# Playlist Track Index Endpoint

The playlist track index endpoint returns a listing of tracks for the playlist.

## URL

```sh
GET /playlist/{id}/track
```

## Authentication

**Required Permission**: view playlist track

**Other Requirements**: If the playlist is private, the user must own the playlist

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

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| video_id   | Filter resources on related video ID                               |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| has        | Filter resources on relations within allowed include paths         |

## Response

```json
{
    tracks: [
        {
            id: "id",
            created_at: "created_at",
            updated_at: "updated_at"
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
curl https://api.animethemes.moe/playlist/N4hG/track
```