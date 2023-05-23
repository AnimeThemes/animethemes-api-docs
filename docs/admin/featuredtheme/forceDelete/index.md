---
title: Featured Theme Force Delete
---

# Featured Theme Force Delete Endpoint

The featured theme force delete endpoint hard deletes a featured theme and returns a confirmation message.

For example, the `/forceDelete/featuredtheme/1` endpoint will hard delete the featured theme of id '1' and return a confirmation message.

## URL

```sh
DELETE /forceDelete/featuredtheme/{id}
```

## Authentication

**Required Permission**: force delete featured theme

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Featured Theme '1' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/featuredtheme/1
```
