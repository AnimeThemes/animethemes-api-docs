---
title: Playlist Restore
---

# Playlist Restore Endpoint

The playlist restore endpoint restores a soft deleted playlist and returns the restored playlist resource.

For example, the `/restore/playlist/1` endpoint will restore the soft deleted playlist of id `1` and return the restored playlist resource.

## URL

```sh
PATCH /restore/playlist/{id}
```

## Authentication

**Required Permission**: restore playlist

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/playlist/1
```
