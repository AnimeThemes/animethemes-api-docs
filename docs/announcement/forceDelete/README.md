---
title: Announcement Force Delete
---

<Block>

# Announcement Force Delete Endpoint

The announcement force delete endpoint hard deletes an announcement and returns a confirmation message.

For example, the `/forceDelete/announcement/1` endpoint will hard delete the announcement of id '1' and return a confirmation message.

## URL

```sh
DELETE /forceDelete/announcement/{id}
```

## Authentication

**Required Permission**: force delete announcement

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Announcement '1' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/announcement/1
```
</CURL>

</Example>

</Block>