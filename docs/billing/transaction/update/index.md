---
title: Transaction Update
---

# Transaction Update Endpoint

The transaction update endpoint updates a transaction and returns the updated transaction resource.

For example, the `/transaction/1?external_id=12345` endpoint will update the transaction external_id attribute and return the updated transaction resource.

## URL

```sh
PUT|PATCH /transaction/{id}
```

## Authentication

**Required Permission**: update transaction

**Roles with Permission**: Admin

**Other Requirements**: Transaction must not be soft deleted

## Parameters

| Name        | Required | Rules                                                      |
| :---------: | :------: | :--------------------------------------------------------- |
| date        | No       | date_format:Y-m-d                                          |
| service     | No       | EnumValue [Other, DigitalOcean, AWS, Hover, WalkerServers] |
| description | No       | string, max:192                                            |
| amount      | No       | regex:/^\-?\d+(\.\d{1,2})?$/                               |
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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/transaction/1
```
