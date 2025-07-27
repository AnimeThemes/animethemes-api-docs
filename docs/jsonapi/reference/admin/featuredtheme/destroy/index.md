---
title: Featured Theme Destroy
---

# Featured Theme Destroy Endpoint

The featured theme destroy endpoint soft deletes a featured theme and returns the deleted featured theme resource.

For example, the `/featuredtheme/1` endpoint will soft delete the featured theme of id '1' and return the deleted featured theme resource.

## URL

```sh
DELETE /featuredtheme/{id}
```

## Authentication

**Required Permission**: delete featured theme

**Roles with Permission**: Admin

**Other Requirements**: Featured Theme must not be soft deleted

## Parameters

None

## Response

```json
{
    featuredtheme: {
        id: id,
        start_at: "start_at",
        end_at: "end_at",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/featuredtheme/1
```
