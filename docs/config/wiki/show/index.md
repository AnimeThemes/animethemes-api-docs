---
title: Wiki Show
---

# Wiki Show Endpoint

The wiki show endpoint returns the wiki resource.

## URL

```sh
GET /config/wiki
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
    wiki: {
        featured_theme: "featured_theme",
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/config/wiki
```
