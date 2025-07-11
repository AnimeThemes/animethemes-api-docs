---
title: Dump Destroy
---

# Dump Destroy Endpoint

The dump destroy endpoint deletes a dump and returns a confirmation message.

For example, the `/dump/1` endpoint will delete the dump of id '1' and return a confirmation message.

## URL

```sh
DELETE /dump/{id}
```

## Authentication

**Required Permission**: delete dump

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    dump: {
        id: id,
        path: "path",
        created_at: "created_at",
        updated_at: "updated_at",
        link: "link
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/dump/1
```
