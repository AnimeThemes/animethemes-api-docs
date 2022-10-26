---
title: Dump Force Delete
---

# Dump Force Delete Endpoint

The dump force delete endpoint hard deletes a dump and returns a confirmation message.

For example, the `/forceDelete/dump/1` endpoint will hard delete the dump of id '1' and return a confirmation message.

## URL

```sh
DELETE /forceDelete/dump/{id}
```

## Authentication

**Required Permission**: force delete dump

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Dump '1' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/dump/1
```
