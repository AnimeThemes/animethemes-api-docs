---
title: Song Resource Update
---

# Song Resource Update Endpoint

The song resource store endpoint updates an song resource and returns the updated song resource resource.

For example, the `/songresource/10535/30212?as=updated+label` endpoint will update the association between the Mijuku DREAMER song and the external resource of id 30212.

## URL

```sh
PUT|PATCH /songresource/{song:id}/{resource:id}
```

## Authentication

**Required Permission**: update song, update external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name        | Required | Rules           |
| :---------: | :------: | :-------------- |
| as          | No       | string, max:192 |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/songresource/
```
