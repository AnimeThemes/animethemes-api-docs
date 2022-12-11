---
title: Playlist Track Update
---

# Playlist Track Update Endpoint

The playlist track update endpoint updates a playlist track and returns the updated playlist track resource.

For example, the `/playlist/1/track/1?next_id=2` endpoint will update the playlist track of id `1` next_id attribute and return the updated playlist track resource.

## URL

```sh
PUT|PATCH /playlist/{id}/track/{id}
```

## Authentication

**Required Permission**: update playlist track

**Other Requirements**: User must own playlist & playlist track must not be soft deleted

## Parameters

| Name        | Required | Rules                                       |
| :---------: | :------: | :------------------------------------------ |
| next_id     | No       | Track ID exists & Track Playlist ID matches |
| previous_id | No       | Track ID exists & Track Playlist ID matches |
| video_id    | No       | Video ID Exists                             |

## Response

```json
{
    track: {
        id: id,
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/1/track/1
```