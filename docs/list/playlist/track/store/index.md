---
title: Playlist Track Store
---

# Playlist Track Store Endpoint

The playlist track store endpoint creates a new playlist track and returns the new playlist track resource.

For example, the `/playlist/N4hG/track?video_id=2712&entry_id=3814` endpoint will create a new playlist track for the Bakemonogatari-OP1.webm video and return the new playlist track resource.

If `next` is set, the new track will be inserted before the next track in the playlist.

If `previous` is set, the new track will be inserted after the previous track in the playlist.

If neither `next` or `previous` is set, the new track will be appended to the end of the list of tracks in the playlist.

## URL

```sh
POST /playlist/{id}/track
```

## Authentication

**Required Permission**: create playlist track

**Other Requirements**: The user must own the playlist

## Parameters

| Name     | Required | Rules                                                                              |
| :------: | :------: | :--------------------------------------------------------------------------------- |
| name     | Yes      | string, max:192                                                                    |
| next     | No       | string, Track ID Exists in Playlist, prohibits:previous                            |
| previous | No       | string, Track ID Exists in Playlist, prohibits:next                                |
| entry_id | Yes      | integer, Entry ID Exists, Anime Theme Entry Video Exists when video_id is provided |
| video_id | Yes      | integer, Video ID Exists, Anime Theme Entry Video Exists when entry_id is provided |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/N4hG/track
```
