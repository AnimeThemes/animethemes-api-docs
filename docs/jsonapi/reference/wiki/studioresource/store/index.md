---
title: Studio Resource Store
---

# Studio Resource Store Endpoint

The studio resource store endpoint creates a new studio resource and returns the new studio resource resource.

For example, the `/studioresource/shaft/14891` endpoint will create a new association between the Shaft studio and the external resource of id 14891.

## URL

```sh
POST /studioresource/{studio:slug}/{resource:id}
```

## Authentication

**Required Permission**: create studio, create external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name | Required | Rules           |
| :--: | :------: | :-------------- |
| as   | No       | string, max:192 |

## Response

```json
{
    studioresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/studioresource/shaft/14891
```
