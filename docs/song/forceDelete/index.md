---
title: Song Force Delete
---

# Song Force Delete Endpoint

The song force delete endpoint hard deletes a song and returns a confirmation message.

For example, the `/forceDelete/song/3373` endpoint will hard delete the "staple stable" song and return a confirmation message.

## URL

```sh
DELETE /forceDelete/song/{id}
```

## Authentication

**Required Permission**: force delete song

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Song 'staple stable' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/song/3373
```
