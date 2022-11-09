---
title: Playlist Track Restore
---

# Playlist Track Restore Endpoint

The playlist track restore endpoint restores a soft deleted playlist track and returns the restored playlist track resource.

For example, the `/restore/playlist/1/track/1` endpoint will restore the soft deleted playlist track of id `1` and return the restored playlist track resource.

## URL

```sh
PATCH /restore/playlist/{id}/track/{id}
```

## Authentication

**Required Permission**: restore playlist track

**Other Requirements**: User must own playlist & playlist track must be soft deleted

## Parameters

None

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/playlist/1/track/1
```
