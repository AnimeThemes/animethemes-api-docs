---
title: Group Force Delete
---

# Group Force Delete Endpoint

The group force delete endpoint hard deletes a group and returns a confirmation message.

For example, the `/forceDelete/group/1` endpoint will hard delete the "English Version" group and return a confirmation message.

## URL

```sh
DELETE /forceDelete/group/{id}
```

## Authentication

**Required Permission**: force delete group

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Group 'English Version' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/group/3373
```
