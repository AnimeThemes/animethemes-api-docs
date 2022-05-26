---
title: Series Destroy
---

<Block>

# Series Destroy Endpoint

The series destroy endpoint soft deletes a series and returns the deleted series resource.

For example, the `/api/series/monogatari` endpoint will soft delete the Monogatari series and return the deleted Monogatari resource.

## URL

```sh
DELETE /api/series/{slug}
```

## Authentication

**Required Permission**: delete series

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    series: {
        id: id,
        name: "name",
        slug: "slug",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://staging.animethemes.moe/api/series/monogatari
```
</CURL>

</Example>

</Block>