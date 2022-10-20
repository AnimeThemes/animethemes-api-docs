---
title: Playlist Destroy
---

# Playlist Destroy Endpoint

The playlist destroy endpoint soft deletes a playlist and returns the deleted playlist resource.

For example, the `/playlist/1` endpoint will soft delete the playlist of id `1` and return the deleted playlist resource.

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
        id: id,
        name: "name",
        visibility: "visibility",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/1
```
