---
title: Playlist Destroy
---

# Playlist Destroy Endpoint

The playlist destroy endpoint deletes a playlist and returns a confirmation message.

For example, the `/playlist/N4hG` endpoint will delete the playlist of id N4hG and return a confirmation message.

## URL

```sh
DELETE /playlist/{id}
```

## Authentication

**Required Permission**: delete playlist

**Other Requirements**: User must own playlist

## Parameters

None

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
        views_count: views_count,
        tracks_exists: tracks_exists,
        tracks_count: tracks_count
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/N4hG
```
