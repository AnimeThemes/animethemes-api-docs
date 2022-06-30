---
title: Balance Update
---

<Block>

# Balance Update Endpoint

The balance update endpoint updates a balance and returns the updated balance resource.

For example, the `/balance/1?usage=10.00` endpoint will update the balance usage attribute and return the updated balance resource.

## URL

```sh
PUT|PATCH /balance/{id}
```

## Authentication

**Required Permission**: update balance

**Roles with Permission**: Admin

## Parameters

| Name                  | Required | Rules                                                      |
| :-------------------: | :------: | :--------------------------------------------------------- |
| date                  | No       | date_format:Y-m-d                                          |
| service               | No       | EnumValue {Other, DigitalOcean, AWS, Hover, WalkerServers} |
| frequency             | No       | EnumValue {Once, Annually, Biannually, Quarterly, Monthly} |
| usage                 | No       | regex:/^\-?\d+(\.\d{1,2})?$/                               |
| month_to_date_balance | No       | regex:/^\-?\d+(\.\d{1,2})?$/                               |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/balance/1
```
</CURL>

</Example>

</Block>