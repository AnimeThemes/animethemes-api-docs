---
title: Studio Force Delete
---

# Studio Force Delete Endpoint

The studio force delete endpoint hard deletes a studio and returns a confirmation message.

For example, the `/forceDelete/studio/shaft` endpoint will hard delete the Shaft studio and return a confirmation message.

## URL

```sh
DELETE /forceDelete/studio/{slug}
```

## Authentication

**Required Permission**: force delete studio

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Studio 'Shaft' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/studio/shaft
```
