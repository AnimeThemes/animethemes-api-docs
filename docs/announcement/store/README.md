---
title: Announcement Store
---

<Block>

# Announcement Store Endpoint

The announcement store endpoint creates a new announcement and returns the new announcement resource.

For example, the `/api/announcement?content=Lorem+Ipsum` endpoint will create a new announcement and return the new announcement resource.

## URL

```sh
POST /api/announcement
```

## Authentication

**Required Permission**: create announcement

**Roles with Permission**: Admin

## Parameters

| Name    | Required | Rules             |
| :-----: | :------: | :---------------- |
| content | Yes      | string, max:65535 |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/announcement/
```
</CURL>

</Example>

</Block>