---
title: Group Destroy
---

# Group Destroy Endpoint

The group destroy endpoint soft deletes a group and returns the deleted group resource.

For example, the `/group/1` endpoint will soft delete the "staple stable" group and return the deleted "English Version" resource.

## URL

```sh
DELETE /group/{id}
```

## Authentication

**Required Permission**: delete group

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: Group must not be soft deleted

## Parameters

None

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/group/1
```
