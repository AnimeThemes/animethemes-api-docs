---
title: Feature Show
---

# Feature Show Endpoint

The feature show endpoint returns a feature resource.

## URL

```sh
GET /feature/{id}
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |

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
curl https://api.animethemes.moe/feature/1
```
