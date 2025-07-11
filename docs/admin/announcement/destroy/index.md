---
title: Announcement Destroy
---

# Announcement Destroy Endpoint

The announcement destroy endpoint deletes an announcement and returns a confirmation message.

For example, the `/announcement/1` endpoint will delete the announcement of id '1' and return a confirmation message.

## URL

```sh
DELETE /announcement/{id}
```

## Authentication

**Required Permission**: delete announcement

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    announcement: {
        id: id,
        content: "content",
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/announcement/1
```
