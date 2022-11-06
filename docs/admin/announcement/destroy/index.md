---
title: Announcement Destroy
---

# Announcement Destroy Endpoint

The announcement destroy endpoint soft deletes an announcement and returns the deleted announcement resource.

For example, the `/announcement/1` endpoint will soft delete the announcement of id '1' and return the deleted announcement resource.

## URL

```sh
DELETE /announcement/{id}
```

## Authentication

**Required Permission**: delete announcement

**Roles with Permission**: Admin

**Other Requirements**: Announcement must not be soft deleted

## Parameters

None

## Response

```json
{
    announcement: {
        id: id,
        content: "content",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/announcement/1
```
