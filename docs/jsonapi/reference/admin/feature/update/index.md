---
title: Feature Update
---

# Feature Update Endpoint

The feature update endpoint updates a feature and returns the updated feature resource.

For example, the `/feature/1?value=false` endpoint will update the feature path attribute and return the updated feature resource.

## URL

```sh
PUT|PATCH /feature/{id}
```

## Authentication

**Required Permission**: update feature

**Roles with Permission**: Admin

## Parameters

| Name    | Required | Rules             |
| :-----: | :------: | :---------------- |
| value   | No       | string, max:192   |

## Response

```json
{
    feature: {
        id: id,
        name: "name",
        value: "value",
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/feature/1
```
