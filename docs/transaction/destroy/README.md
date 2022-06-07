---
title: Transaction Destroy
---

<Block>

# Transaction Destroy Endpoint

The transaction destroy endpoint soft deletes a transaction and returns the deleted transaction resource.

For example, the `/api/transaction/1` endpoint will soft delete the transaction of id '1' and return the deleted transaction resource.

## URL

```sh
DELETE /api/transaction/{id}
```

## Authentication

**Required Permission**: delete transaction

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

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/transaction/1
```
</CURL>

</Example>

</Block>