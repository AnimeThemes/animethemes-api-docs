---
title: Balance Destroy
---

<Block>

# Balance Destroy Endpoint

The balance destroy endpoint soft deletes a balance and returns the deleted balance resource.

For example, the `/balance/1` endpoint will soft delete the balance of id '1' and return the deleted balance resource.

## URL

```sh
DELETE /balance/{id}
```

## Authentication

**Required Permission**: delete balance

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

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/balance/1
```
</CURL>

</Example>

</Block>