---
title: Feature Index
---

# Feature Index Endpoint

The feature index endpoint returns a listing of feature resources.

## URL

```sh
GET /feature/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                     |
| :----------: | :------: | :-------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                             |
| filter       | No       | Filters for feature resources                                   |
| page[number] | No       | The page of feature resources to display                        |
| page[size]   | No       | The number of feature resources to display for the current page |
| sort         | No       | The list of fields to sort the feature resources                |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| name       | Sort resources on the title of the resource                         |
| value      | Sort resources on the value of the resource                         |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                         |
| :--------: | :-------------------------------------------------- |
| id         | Filter resources on the primary key                 |
| name       | Filter resources on the title of the resource       |
| value      | Filter resources on the value of the resource       |
| created_at | Filter resources on the resource creation date      |
| updated_at | Filter resources on the resource last modified date |

## Response

```json
{
    features: [
        {
            id: id,
            name: "name",
            value: "value",
            created_at: "created_at",
            updated_at: "updated_at"
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

## Example

```bash
curl https://api.animethemes.moe/feature/
```
