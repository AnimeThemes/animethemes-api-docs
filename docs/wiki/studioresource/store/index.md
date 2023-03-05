---
title: Studio Resource Store
---

# Studio Resource Store Endpoint

The studio resource store endpoint creates a new studio resource and returns the new studio resource resource.

For example, the `/studioresource?studio_id=11&resource_id=14891` endpoint will create a new association between the Shaft studio and the external resource of id 14891.

## URL

```sh
POST /studioresource
```

## Authentication

**Required Permission**: create studio, create external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name        | Required | Rules                       |
| :---------: | :------: | :-------------------------- |
| studio_id   | Yes      | integer, Studio ID exists   |
| resource_id | Yes      | integer, Resource ID exists |
| as          | No       | string, max:192             |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/studioresource/
```
