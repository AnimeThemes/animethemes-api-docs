---
title: Resource Restore
---

# Resource Restore Endpoint

The resource restore endpoint restores a soft deleted external resource and returns the restored external resource.

For example, the `/restore/resource/1083` endpoint will restore the soft deleted MyAnimeList resource for the Bakemonogatari anime and return the restored MyAnimeList resource.

## URL

```sh
PATCH /restore/resource/{id}
```

## Authentication

**Required Permission**: restore external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: External resource must be soft deleted

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/resource/1083
```
