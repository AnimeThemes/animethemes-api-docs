---
title: Group Store
---

# Group Store Endpoint

The group store endpoint creates a new group and returns the new group resource.

For example, the `/group?name=English+Version` endpoint will create a new "English Version" group and return the new "English Version" resource.

## URL

```sh
POST /group
```

## Authentication

**Required Permission**: create group

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name              | Required | Rules                               |
| :---------------: | :------: | :---------------------------------- |
| name              | Yes      | string, max:192                     |
| slug              | Yes      | string, max:192, alpha_dash         |
| video_filename    | No       | string, max:192                     |

## Response

```json
{
    group: {
        id: id,
        name: "name",
        slug: "slug",
        video_filename: "video_filename",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/group/
```
