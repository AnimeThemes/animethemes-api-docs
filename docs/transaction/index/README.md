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

|    Name     | Description                                                         |
| :---------: | :------------------------------------------------------------------ |
| id          | Sort resources on the primary key                                   |
| date        | Sort resources on the date that the transaction was made            |
| service     | Sort resources on the service that is billing AnimeThemes           |
| description | Sort resources on the description of what the transaction is for    |
| amount      | Sort resources on the amount of the transaction billed / paid       |
| external_id | Sort resources on the identifier used by the service                |
| created_at  | Sort resources on the resource creation date                        |
| updated_at  | Sort resources on the resource last modified date                   |
| deleted_at  | Sort resources on the resource deletion date                        |
| random      | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name     | Description                                                        |
| :---------: | :----------------------------------------------------------------- |
| id          | Filter resources on the primary key                                |
| date        | Filter resources on the date that the transaction was made         |
| service     | Filter resources on the service that is billing AnimeThemes        |
| description | Filter resources on the description of what the transaction is for |
| amount      | Filter resources on the amount of the transaction billed / paid    |
| external_id | Filter resources on the identifier used by the service             |
| created_at  | Filter resources on the resource creation date                     |
| updated_at  | Filter resources on the resource last modified date                |
| deleted_at  | Filter resources on the resource deletion date                     |
| trashed     | Filter resources on trashed (deleted) status {With, Without, Only} |

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