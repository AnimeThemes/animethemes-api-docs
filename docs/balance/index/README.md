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

## Authentication

None

## Parameters

| Name         | Required | Description                                                                     |
| :----------: | :------: | :----------------------------------------------------------------------------   |
| fields       | No       | Sparse fieldsets for resource types                                             |
| filter       | No       | Filters for balance resources & constraining the inclusion of related resources |
| page[number] | No       | The page of balance resources to display                                        |
| page[size]   | No       | The number of balance resources to display for the current page                 |
| sort         | No       | The list of fields to sort the balance resources                                |

## Allowed Sort Fields

|         Name          | Description                                                         |
| :-------------------: | :------------------------------------------------------------------ |
| id                    | Sort resources on the primary key                                   |
| date                  | Sort resources on the month that the balance applies to             |
| service               | Sort resources on the service that is billing AnimeThemes           |
| frequency             | Sort resources on the frequency that AnimeThemes is billed          |
| usage                 | Sort resources on the consumption of AnimeThemes in the period      |
| month_to_date_balance | Sort resources on the balance of the AnimeThemes account            |
| created_at            | Sort resources on the resource creation date                        |
| updated_at            | Sort resources on the resource last modified date                   |
| deleted_at            | Sort resources on the resource deletion date                        |
| random                | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|         Name          | Description                                                        |
| :-------------------: | :----------------------------------------------------------------- |
| id                    | Filter resources on the primary key                                |
| date                  | Filter resources on the month that the balance applies to          |
| service               | Filter resources on the service that is billing AnimeThemes        |
| frequency             | Filter resources on the frequency that AnimeThemes is billed       |
| usage                 | Filter resources on the consumption of AnimeThemes in the period   |
| month_to_date_balance | Filter resources on the balance of the AnimeThemes account         |
| created_at            | Filter resources on the resource creation date                     |
| updated_at            | Filter resources on the resource last modified date                |
| deleted_at            | Filter resources on the resource deletion date                     |
| trashed               | Filter resources on trashed (deleted) status {With, Without, Only} |

## Response

```json
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