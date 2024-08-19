---
title: Playlist Track Update
---

# Playlist Track Update Endpoint

The playlist track update endpoint updates a playlist track and returns the updated playlist track resource.

For example, the `/playlist/N4hG/track/Q3hD?next_id=2` endpoint will update the playlist track of id Q3hD next_id attribute and return the updated playlist track resource.

If `next` is set, the track will be moved before the next track in the playlist.

If `previous` is set, the track will be moved after the previous track in the playlist.

## URL

```sh
PUT|PATCH /playlist/{id}/track/{id}
```

## Authentication

**Required Permission**: update playlist track

**Other Requirements**: User must own playlist & playlist track must not be soft deleted

## Parameters

| Name     | Required | Rules                                                                              |
| :------: | :------: | :--------------------------------------------------------------------------------- |
| next     | No       | string, Track ID exists & Track Playlist ID matches                                |
| previous | No       | string, Track ID exists & Track Playlist ID matches                                |
| entry_id | No       | integer, Entry ID Exists, Anime Theme Entry Video Exists when video_id is provided |
| video_id | No       | integer, Video ID Exists, Anime Theme Entry Video Exists when entry_id is provided |

## Response

```json
{
    track: {
        id: "id",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/N4hG/track/Q3hD
```