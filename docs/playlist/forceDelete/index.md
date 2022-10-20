---
title: Playlist Force Delete
---

# Playlist Force Delete Endpoint

The playlist force delete endpoint hard deletes a playlist and returns a confirmation message.

For example, the `/forceDelete/playlist/1` endpoint will hard delete the playlist of id `1` and return a confirmation message.

## URL

```sh
DELETE /forceDelete/playlist/{id}
```

## Authentication

**Required Permission**: force delete playlist

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Playlist 'Name' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/playlist/bakemonogatari
```