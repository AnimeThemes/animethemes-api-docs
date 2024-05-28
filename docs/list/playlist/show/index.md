---
title: Playlist Show
---

# Playlist Show Endpoint

The playlist show endpoint returns a playlist resource.

## URL

```sh
GET /playlist/{id}
```

## Authentication

**Required Permission**: view playlist

**Other Requirements**: If the playlist is private, the user must own the playlist

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| filter  | No       | Filters to constrain the inclusion of related resources |
| include | No       | Inclusion of related resources                          |
| sort    | No       | Sort related resources                                  |

## Response

```json
{
    playlist: {
        id: "id",
        name: "name",
        description: "description",
        visibility: "visibility",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        views_count: views_count,
        tracks_exists: tracks_exists,
        tracks_count: tracks_count
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/playlist/N4hG
```