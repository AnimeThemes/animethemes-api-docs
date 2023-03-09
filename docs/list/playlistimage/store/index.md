---
title: Playlist Image Store
---

# Playlist Image Store Endpoint

The playlist image store endpoint creates a new playlist image and returns the new playlist image resource.

For example, the `/playlistimage?playlist_id=1&image_id=1` endpoint will create a new association between the playlist of id 1 and the large cover image of id 1.

## URL

```sh
POST /playlistimage
```

## Authentication

**Required Permission**: create playlist, create image

## Parameters

| Name        | Required | Rules                       |
| :---------: | :------: | :-------------------------- |
| playlist_id | Yes      | integer, Playlist ID exists |
| image_id    | Yes      | integer, Image ID exists    |

## Response

```json
{
    playlistimage: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlistimage/
```
