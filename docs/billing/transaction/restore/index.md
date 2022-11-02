---
title: Transaction Restore
---

# Transaction Restore Endpoint

The transaction restore endpoint restores a soft deleted transaction and returns the restored transaction resource.

For example, the `/restore/transaction/1` endpoint will restore the soft deleted transaction of id '1' and return the restored transaction resource.

## URL

```sh
PATCH /restore/transaction/{id}
```

## Authentication

**Required Permission**: restore transaction

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    transaction: {
        id: id,
        date: "date",
        service: "service",
        description: "description",
        amount: amount,
        external_id: external_id,
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/transaction/1
```
