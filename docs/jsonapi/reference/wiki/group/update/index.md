---
title: Group Update
---

# Group Update Endpoint

The group update endpoint updates a group and returns the updated group resource.

For example, the `/group/1?name=English+Version` endpoint will update the "English+Version" group title attribute and return the updated "English+Version" resource.

## URL

```sh
PUT|PATCH /group/{id}
```

## Authentication

**Required Permission**: update group

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: Group must not be soft deleted

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/group/1
```
