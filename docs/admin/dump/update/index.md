---
title: Dump Update
---

# Dump Update Endpoint

The dump update endpoint updates a dump and returns the updated dump resource.

For example, the `/dump/1?path=animethemes-db-dump-wiki-1663559663946.sql` endpoint will update the dump path attribute and return the updated dump resource.

## URL

```sh
PUT|PATCH /dump/{id}
```

## Authentication

**Required Permission**: update dump

**Roles with Permission**: Admin

## Parameters

| Name    | Required | Rules             |
| :-----: | :------: | :---------------- |
| path    | No       | string, max:192   |

## Response

```json
{
    dump: {
        id: id,
        path: "path",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        link: "link"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/dump/1
```
