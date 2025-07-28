---
title: Playlist Track Show
---

# Playlist Track Show Endpoint

The playlist track show endpoint returns a playlist track resource.

## URL

```sh
GET /playlist/{id}/track/{id}
```

## Authentication

**Required Permission**: view playlist track

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
    track: {
        id: "id",
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/playlist/N4hG/track/Q3hD
```