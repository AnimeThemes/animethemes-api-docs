---
title: Featured Theme Destroy
---

# Featured Theme Destroy Endpoint

The featured theme destroy endpoint deletes a featured theme and returns a confirmation message.

For example, the `/featuredtheme/1` endpoint will delete the featured theme of id '1' and return a confirmation message.

## URL

```sh
DELETE /featuredtheme/{id}
```

## Authentication

**Required Permission**: delete featured theme

**Roles with Permission**: Admin

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
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/featuredtheme/1
```
