---
title: Artist Member Store
---

# Artist Member Store Endpoint

The artist member store endpoint creates a new artist member and returns the new artist member resource.

For example, the `/artistmember/ms/pile` endpoint will create a new association between the μ's group and the Pile member.

## URL

```sh
POST /artistmember/{artist:slug}/{artist:slug}
```

## Authentication

**Required Permission**: create artist

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name   | Required | Rules           |
| :---:  | :------: | :-------------- |
| alias  | No       | string, max:192 |
| as     | No       | string, max:192 |
| notes  | No       | string, max:192 |

## Response

```json
{
    artistmember: {
        created_at: "created_at",
        updated_at: "updated_at",
        alias: "alias",
        as: "as",
        notes: "notes"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistmember/ms/pile
```
