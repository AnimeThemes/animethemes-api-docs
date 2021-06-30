---
title: Transaction Index
---

<Block>

# Transaction Index Endpoint

The transaction index endpoint returns a listing of transaction resources.

## URL

```sh
GET /api/transaction/
```

## Parameters

| Name         | Required | Description                                                                         |
| :----------: | :------: | :---------------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                                 |
| include      | No       | Inclusion of related resources                                                      |
| filter       | No       | Filters for transaction resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the transaction resources                                |
| page[size]   | No       | The number of transaction resources to display for the current page                 |
| page[number] | No       | The page of transaction resources to display                                        |

## Allowed Sort Fields

* transaction_id
* date
* service
* description
* amount
* external_id
* created_at
* updated_at
* deleted_at

## Filters

* date
* service
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    transactions: [
        {
            id: id,
            date: "date",
            service: "service",
            description: "description",
            amount: amount,
            external_id: external_id,
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at"
        },
        ...
    ],
    links: {
        first: "first",
        last: "last",
        prev: "prev",
        next: "next"
    },
    meta: {
        current_page: current_page,
        from: from,
        path: "path",
        per_page: per_page,
        to: to
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/transaction/
```
</CURL>

</Example>

</Block>