---
title: Balance Restore
---

# Balance Restore Endpoint

The balance restore endpoint restores a soft deleted balance and returns the restored balance resource.

For example, the `/restore/balance/1` endpoint will restore the soft deleted balance of id '1' and return the restored balance resource.

## URL

```sh
PATCH /restore/balance/{id}
```

## Authentication

**Required Permission**: restore balance

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    balance: {
        id: id,
        date: "date",
        service: "service",
        frequency: "frequency",
        usage: usage,
        month_to_date_balance: month_to_date_balance,
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/balance/1
```
