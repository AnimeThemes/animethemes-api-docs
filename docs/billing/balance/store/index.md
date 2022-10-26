---
title: Balance Store
---

# Balance Store Endpoint

The balance store endpoint creates a new balance and returns the new balance resource.

For example, the `/balance?date=2022-06-01&service=AWS&frequency=Monthly&usage=10.00&month_to_date_balance=50.00` endpoint will create a new balance and return the new balance resource.

## URL

```sh
POST /balance
```

## Authentication

**Required Permission**: create balance

**Roles with Permission**: Admin

## Parameters

| Name                  | Required | Rules                                                      |
| :-------------------: | :------: | :--------------------------------------------------------- |
| date                  | Yes      | date_format:Y-m-d                                          |
| service               | Yes      | EnumValue [Other, DigitalOcean, AWS, Hover, WalkerServers] |
| frequency             | Yes      | EnumValue [Once, Annually, Biannually, Quarterly, Monthly] |
| usage                 | Yes      | regex:/^\-?\d+(\.\d{1,2})?$/                               |
| month_to_date_balance | Yes      | regex:/^\-?\d+(\.\d{1,2})?$/                               |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/balance/
```
