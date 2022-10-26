---
title: Playlist Track Store
---

# Playlist Track Store Endpoint

The playlist track store endpoint creates a new playlist track and returns the new playlist track resource.

For example, the `/playlist/1/playlisttrack?video_id=2712` endpoint will create a new playlist track for the Bakemonogatari-OP1.webm video and return the new playlist track resource.

## URL

```sh
POST /playlist/{id}/playlisttrack
```

## Authentication

**Required Permission**: create playlist track

**Other Requirements**: The user must own the playlist

## Parameters

| Name       | Required | Rules           |
| :--------: | :------: | :-------------- |
| name       | Yes      | string, max:192 |
| video_id   | Yes      | Video ID Exists |

## Response

```json
{
    playlisttrack: {
        id: id,
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/1/playlisttrack
```
