---
title: Announcement Show
---

<Block>

# Announcement Show Endpoint

The announcement show endpoint returns an announcement resource.

## URL

```sh
GET /api/announcement/{id}
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |

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
curl https://api.animethemes.moe/announcement/1
```
</CURL>

</Example>

</Block>