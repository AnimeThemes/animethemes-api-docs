---
title: Dump Show
---

# Dump Show Endpoint

The dump show endpoint returns a dump resource.

## URL

```sh
GET /dump/{id}
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
    dump: {
        id: id,
        path: "path",
        created_at: "created_at",
        updated_at: "updated_at",
        link: "link"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/dump/1
```
