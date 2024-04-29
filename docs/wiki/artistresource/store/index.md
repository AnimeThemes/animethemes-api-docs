---
title: Artist Resource Store
---

# Artist Resource Store Endpoint

The artist resource store endpoint creates a new artist resource and returns the new artist resource resource.

For example, the `/artistresource/chiwa_saitou/3361` endpoint will create a new association between the Chiwa Saitou artist and the external resource of id 3361.

## URL

```sh
POST /artistresource/{artist:slug}/{resource:id}
```

## Authentication

**Required Permission**: create artist, create external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name | Required | Rules           |
| :--: | :------: | :-------------- |
| as   | No       | string, max:192 |

## Response

```json
{
    artistresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistresource/chiwa_saitou/3361
```
