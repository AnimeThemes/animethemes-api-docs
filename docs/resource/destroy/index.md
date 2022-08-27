---
title: Resource Destroy
---

# Resource Destroy Endpoint

The resource destroy endpoint soft deletes an external resource and returns the deleted external resource.

For example, the `/resource/1083` endpoint will soft delete the MyAnimeList resource for the Bakemonogatari anime and return the deleted MyAnimeList resource.

## URL

```sh
DELETE /resource/{id}
```

## Authentication

**Required Permission**: delete external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    resource: {
        id: id,
        link: "link",
        external_id: external_id,
        site: "site",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        link: "link"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/resource/1083
```
