---
title: Video Script Force Delete
---

# Video Script Force Delete Endpoint

The video script force delete endpoint hard deletes a video script and returns a confirmation message.

For example, the `/forceDelete/videoscript/1` endpoint will hard delete the video script of id '1' and return a confirmation message.

## URL

```sh
DELETE /forceDelete/videoscript/{id}
```

## Authentication

**Required Permission**: force delete video script

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Video Script '1' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/videoscript/1
```
