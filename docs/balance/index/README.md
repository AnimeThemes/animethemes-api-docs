---
title: Balance Index
---

<Block>

# Balance Index Endpoint

The balance index endpoint returns a listing of balance resources.

## URL

```sh
GET /api/balance/
```

## Parameters

| Name         | Required | Description                                                                     |
| :----------: | :------: | :----------------------------------------------------------------------------   |
| fields       | No       | Sparse fieldsets for resource types                                             |
| include      | No       | Inclusion of related resources                                                  |
| filter       | No       | Filters for balance resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the balance resources                                |
| page[size]   | No       | The number of balance resources to display for the current page                 |
| page[number] | No       | The page of balance resources to display                                        |

## Allowed Sort Fields

* balance_id
* date
* service
* frequency
* usage
* month_to_date_balance  
* created_at
* updated_at
* deleted_at

## Filters

* date
* service
* frequency
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
Status: 200

{
    balances: [
        {
            id: id,
            date: "date",
            service: "service",
            frequency: "frequency",
            usage: usage,
            month_to_date_balance: month_to_date_balance,
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
curl https://staging.animethemes.moe/api/balance/
```
</CURL>

</Example>

</Block>