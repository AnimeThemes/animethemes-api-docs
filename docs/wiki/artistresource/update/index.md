---
title: Artist Resource Update
---

# Artist Resource Update Endpoint

The artist resource store endpoint updates an artist resource and returns the updated artist resource resource.

For example, the `/artistresource/chiwa_saitou/3361?as=updated+label` endpoint will update the association between the Chiwa Saitou artist and the external resource of id 3361.

## URL

```sh
PUT|PATCH /artistresource/{artist:slug}/{resource:id}
```

## Authentication

**Required Permission**: update artist, update external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name        | Required | Rules           |
| :---------: | :------: | :-------------- |
| as          | No       | string, max:192 |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistresource/
```
