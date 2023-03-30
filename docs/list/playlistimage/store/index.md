---
title: Playlist Image Store
---

# Playlist Image Store Endpoint

The playlist image store endpoint creates a new playlist image and returns the new playlist image resource.

For example, the `/playlistimage/N4hG/1` endpoint will create a new association between the playlist of id N4hG and the large cover image of id 1.

## URL

```sh
POST /playlistimage/{playlist:id}/{image:id}
```

## Authentication

**Required Permission**: create playlist, create image

## Parameters

None

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlistimage/N4hG/1
```
