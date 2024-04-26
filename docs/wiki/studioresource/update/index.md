---
title: Studio Resource Update
---

# Studio Resource Update Endpoint

The studio resource store endpoint updates a studio resource and returns the updated studio resource resource.

For example, the `/studioresource/shaft/14891?as=updated+label` endpoint will update the association between the Shaft studio and the external resource of id 14891.

## URL

```sh
PUT|PATCH /studioresource/{studio:slug}/{resource:id}
```

## Authentication

**Required Permission**: update studio, update external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name        | Required | Rules           |
| :---------: | :------: | :-------------- |
| as          | No       | string, max:192 |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/studioresource/
```
