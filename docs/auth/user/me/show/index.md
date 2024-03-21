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

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| filter  | No       | Filters to constrain the inclusion of related resources |
| include | No       | Inclusion of related resources                          |
| sort    | No       | Sort related resources                                  |

## Response

```json
{
    user: {
        id: id,
        name: "name",
        email: "email",
        email_verified_at: "email_verified_at",
        two_factor_confirmed_at: "two_factor_confirmed_at",
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