---
title: Playlist Track Store
---

# Playlist Track Store Endpoint

The playlist track store endpoint creates a new playlist track and returns the new playlist track resource.

For example, the `/playlist/1/track?video_id=2712` endpoint will create a new playlist track for the Bakemonogatari-OP1.webm video and return the new playlist track resource.

If next_id is set, the new track will be inserted before the next track in the playlist.

If previous_id is set, the new track will be inserted after the previous track in the playlist.

If neither next_id or previous_id is set, the new track will be appended to the end of the list of tracks in the playlist.

## URL

```sh
POST /playlist/{id}/track
```

## Authentication

**Required Permission**: create playlist track

**Other Requirements**: The user must own the playlist

## Parameters

| Name        | Required | Rules                                                       |
| :---------: | :------: | :---------------------------------------------------------- |
| name        | Yes      | string, max:192                                             |
| next_id     | No       | integer, Track ID Exists in Playlist, prohibits:previous_id |
| previous_id | No       | integer, Track ID Exists in Playlist, prohibits:next_id     |
| video_id    | Yes      | Video ID Exists                                             |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/1/track
```
