---
title: Series Destroy
---

# Series Destroy Endpoint

The series destroy endpoint soft deletes a series and returns the deleted series resource.

For example, the `/series/monogatari` endpoint will soft delete the Monogatari series and return the deleted Monogatari resource.

## URL

```sh
DELETE /series/{slug}
```

## Authentication

**Required Permission**: delete series

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: Series must not be soft deleted

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

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/series/monogatari
```
