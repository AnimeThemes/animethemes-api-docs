---
title: Song Resource Store
---

# Song Resource Store Endpoint

The song resource store endpoint creates a new song resource and returns the new song resource resource.

For example, the `/songresource/10535/30212` endpoint will create a new association between the Mijuku DREAMER song and the external resource of id 30212.

## URL

```sh
POST /songresource/{song:id}/{resource:id}
```

## Authentication

**Required Permission**: create song, create external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name | Required | Rules           |
| :--: | :------: | :-------------- |
| as   | No       | string, max:192 |

## Response

```json
{
    songresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/songresource/10535/30212
```
