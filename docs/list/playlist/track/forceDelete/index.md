---
title: Playlist Track Force Delete
---

# Playlist Track Force Delete Endpoint

The playlist track force delete endpoint hard deletes a playlist track and returns a confirmation message.

For example, the `/forceDelete/playlist/N4hG/track/Q3hD` endpoint will hard delete the playlist track of id Q3hD and return a confirmation message.

## URL

```sh
DELETE /forceDelete/playlist/{id}/track/{id}
```

## Authentication

**Required Permission**: force delete playlist

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Playlist Track 'Q3hD' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/playlist/N4hG/track/Q3hD
```