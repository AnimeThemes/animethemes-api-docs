---
title: Playlist Track Restore
---

# Playlist Track Restore Endpoint

The playlist track restore endpoint restores a soft deleted playlist track and returns the restored playlist track resource.

For example, the `/restore/playlist/N4hG/track/Q3hD` endpoint will restore the soft deleted playlist track of id Q3hD and return the restored playlist track resource.

The restored track will be appended to the end of the list of tracks in the playlist.

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
    track: {
        id: "id",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/playlist/N4hG/track/Q3hD
```
