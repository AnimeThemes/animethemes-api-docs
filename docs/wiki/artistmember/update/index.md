---
title: Artist Member Update
---

# Artist Member Update Endpoint

The artist member update endpoint updates an artist member and returns the updated artist member resource.

For example, the `/artistmember/ms/pile?as=updated+label` endpoint will update the association between the μ's group and the Pile member.

## URL

```sh
PUT|PATCH /artistmember/{artist:slug}/{artist:slug}
```

## Authentication

**Required Permission**: update artist

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name        | Required | Rules           |
| :---------: | :------: | :-------------- |
| alias       | No       | string, max:192 |
| as          | No       | string, max:192 |

## Response

```json
{
    artistmember: {
        created_at: "created_at",
        updated_at: "updated_at",
        alias: "alias",
        as: "as"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistmember/
```
