---
title: Anime Theme Destroy
---

<Block>

# Anime Theme Destroy Endpoint 

The anime theme destroy endpoint soft deletes an anime theme and returns the deleted anime theme resource.

For example, the `/api/animetheme/3373` endpoint will soft delete the OP1 theme for the Bakemonogatari anime and return the deleted anime theme resource.

## URL

```sh
DELETE /api/animetheme/{id}
```

## Authentication

**Required Permission**: delete anime theme

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    animetheme: {
        id: id,
        type: "type",
        sequence: sequence,
        group: "group",
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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animetheme/3373
```
</CURL>

</Example>

</Block>