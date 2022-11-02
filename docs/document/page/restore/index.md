---
title: Page Restore
---

# Page Restore Endpoint

The page restore endpoint restores a soft deleted page and returns the restored page resource.

For example, the `/restore/page/encoding` endpoint will restore the soft deleted Encoding page and return the restored Encoding resource.

## URL

```sh
PATCH /restore/page/{slug}
```

## Authentication

**Required Permission**: restore page

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    page: {
        id: id,
        name: "name",
        slug: "slug",
        body: "body",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/page/encoding
```
