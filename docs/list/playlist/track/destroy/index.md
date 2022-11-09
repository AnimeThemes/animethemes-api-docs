---
title: Playlist Track Destroy
---

# Playlist Track Destroy Endpoint

The playlist track destroy endpoint soft deletes a playlist track and returns the deleted playlist track resource.

For example, the `/playlist/1/track/1` endpoint will soft delete the playlist track of id `1` and return the deleted playlist track resource.

## URL

```sh
DELETE /playlist/{id}/track/{id}
```

## Authentication

**Required Permission**: delete playlist track

**Other Requirements**: User must own playlist & playlist track must not be soft deleted

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/1/track/1
```
