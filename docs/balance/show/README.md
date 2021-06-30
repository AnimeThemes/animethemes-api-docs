---
title: Balance Show
---

<Block>

# Balance Show Endpoint

The balance show endpoint returns a balance resource.

## URL

```sh
GET /api/balance/{id}
```

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| include | No       | Inclusion of related resources                          |
| filter  | No       | Filters to constrain the inclusion of related resources |

## Response

```json
Status: 200

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
curl https://staging.animethemes.moe/api/balance/1
```
</CURL>

</Example>

</Block>