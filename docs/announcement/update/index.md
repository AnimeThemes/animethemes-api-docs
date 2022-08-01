---
title: Announcement Update
---

# Announcement Update Endpoint

The announcement update endpoint updates an announcement and returns the updated announcement resource.

For example, the `/announcement/1?content=The+Release+Has+Been+Deployed!` endpoint will update the announcement content attribute and return the updated announcement resource.

## URL

```sh
PUT|PATCH /announcement/{id}
```

## Authentication

**Required Permission**: update announcement

**Roles with Permission**: Admin

## Parameters

| Name    | Required | Rules             |
| :-----: | :------: | :---------------- |
| content | No       | string, max:65535 |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/announcement/1
```
