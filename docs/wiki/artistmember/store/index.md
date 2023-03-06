---
title: Artist Member Store
---

# Artist Member Store Endpoint

The artist member store endpoint creates a new artist member and returns the new artist member resource.

For example, the `/artistmember?artist_id=410&member_id=191` endpoint will create a new association between the μ's group and the Pile member.

## URL

```sh
POST /artistmember
```

## Authentication

**Required Permission**: create artist

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name      | Required | Rules                     |
| :-------: | :------: | :------------------------ |
| artist_id | Yes      | integer, Artist ID exists |
| member_id | Yes      | integer, Artist ID exists |
| as        | No       | string, max:192           |

## Response

```json
{
    artistmember: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistmember/
```
