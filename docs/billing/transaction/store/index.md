---
title: Transaction Store
---

# Transaction Store Endpoint

The transaction store endpoint creates a new transaction and returns the new transaction resource.

For example, the `/transaction?date=2022-06-01&service=AWS&description=June+2022+Payment&amount=10.00` endpoint will create a new transaction and return the new transaction resource.

## URL

```sh
POST /transaction
```

## Authentication

**Required Permission**: create transaction

**Roles with Permission**: Admin

## Parameters

| Name        | Required | Rules                                                      |
| :---------: | :------: | :--------------------------------------------------------- |
| date        | Yes      | date_format:Y-m-d                                          |
| service     | Yes      | EnumValue [Other, DigitalOcean, AWS, Hover, WalkerServers] |
| description | Yes      | string, max:192                                            |
| amount      | Yes      | regex:/^\-?\d+(\.\d{1,2})?$/                               |
| external_id | No       | string, max:192                                            |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/transaction/
```
