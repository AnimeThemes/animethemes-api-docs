---
title: Playlist Track Destroy
---

# Playlist Track Destroy Endpoint

The playlist track destroy endpoint deletes a playlist track and returns a confirmation message.

For example, the `/playlist/N4hG/track/Q3hD` endpoint will delete the playlist track of id Q3hD and return a confirmation message.

The track will be dissociated from the list of tracks within the playlist.

## URL

```sh
DELETE /playlist/{id}/track/{id}
```

## Authentication

**Required Permission**: delete playlist track

**Other Requirements**: User must own playlist

## Parameters

None

## Response

```json
{
    track: {
        id: "id",
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/N4hG/track/Q3hD
```
