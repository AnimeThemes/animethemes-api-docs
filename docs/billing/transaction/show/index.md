---
title: Transaction Show
---

# Transaction Show Endpoint

The transaction show endpoint returns a transaction resource.

## URL

```sh
GET /transaction/{id}
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
curl https://api.animethemes.moe/transaction/1
```
