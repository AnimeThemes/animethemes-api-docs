---
title: Dump Store
---

# Dump Store Endpoint

The dump store endpoint creates a new dump and returns the new dump resource.

For example, the `/dump?path=animethemes-db-dump-wiki-1663559663946.sql` endpoint will create a new dump and return the new dump resource.

## URL

```sh
POST /dump
```

## Authentication

**Required Permission**: create dump

**Roles with Permission**: Admin

## Parameters

| Name    | Required | Rules             |
| :-----: | :------: | :---------------- |
| path    | Yes      | string, max:192   |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/dump/
```
