---
title: Anime Theme Restore
---

# Anime Theme Restore Endpoint 

The anime theme restore endpoint restores a soft deleted anime theme and returns the restored anime theme resource.

For example, the `/restore/animetheme/3373` endpoint will restore the soft deleted OP1 theme for the Bakemonogatari anime and return the restored anime theme resource.

## URL

```sh
PATCH /restore/animetheme/{id}
```

## Authentication

**Required Permission**: restore anime theme

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Theme must be soft deleted

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

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/animetheme/3373
```
