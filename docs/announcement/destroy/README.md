---
title: Announcement Destroy
---

<Block>

# Announcement Destroy Endpoint

The announcement destroy endpoint soft deletes an announcement and returns the deleted announcement resource.

For example, the `/api/announcement/1` endpoint will soft delete the announcement of id '1' and return the deleted announcement resource.

## URL

```sh
DELETE /api/announcement/{id}
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
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/announcement/1
```
</CURL>

</Example>

</Block>