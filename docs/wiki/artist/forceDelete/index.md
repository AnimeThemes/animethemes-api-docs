---
title: Artist Force Delete
---

# Artist Force Delete Endpoint

The artist force delete endpoint hard deletes an artist and returns a confirmation message.

For example, the `/forceDelete/artist/chiwa_saitou` endpoint will hard delete the Chiwa Saitou artist and return a confirmation message.

## URL

```sh
DELETE /forceDelete/artist/{slug}
```

## Authentication

**Required Permission**: force delete artist

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Artist 'Chiwa Saitou' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/artist/chiwa_saitou
```
