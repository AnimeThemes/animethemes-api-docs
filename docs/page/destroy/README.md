---
title: Page Destroy
---

<Block>

# Page Destroy Endpoint

The page destroy endpoint soft deletes a page and returns the deleted page resource.

For example, the `/api/page/encoding` endpoint will soft delete the Encoding page and return the deleted Encoding resource.

## URL

```sh
DELETE /api/page/{slug}
```

## Authentication

**Required Permission**: delete page

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

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/page/encoding
```
</CURL>

</Example>

</Block>