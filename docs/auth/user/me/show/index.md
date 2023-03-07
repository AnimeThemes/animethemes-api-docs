---
title: My Show
---

# My Show Endpoint

The my show endpoint returns the user resource for the currently authenticated user.

## URL

```sh
GET /me/
```

## Authentication

None

## Parameters

None

## Response

```json
{
    user: {
        id: id,
        name: "name",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -H "Authorization: Bearer {token}" https://api.animethemes.moe/me
```