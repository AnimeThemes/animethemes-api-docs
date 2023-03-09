---
title: Playlist Image Show
---

# Playlist Image Show Endpoint

The playlist image show endpoint returns an playlist image resource.

For example, the `/playlistimage/1/1` endpoint will return the playlist image resource for the association between the playlist of id 1 and the large cover image of id 1.

## URL

```sh
GET /playlistimage/{playlist:id}/{image:id}
```

## Authentication

**Required Permission**: view playlist

**Other Requirements**: If the playlist is private, the user must own the playlist

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
curl https://api.animethemes.moe/playlistimage/1/1
```
