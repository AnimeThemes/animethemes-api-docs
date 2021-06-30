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

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| include | No       | Inclusion of related resources                          |
| filter  | No       | Filters to constrain the inclusion of related resources |

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
curl https://staging.animethemes.moe/api/announcement/1
```
</CURL>

</Example>

</Block>