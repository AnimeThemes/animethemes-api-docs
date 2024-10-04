---
title: Artist Member Index
---

# Artist Member Index Endpoint

The artist member index endpoint returns a listing of artist member resources.

## URL

```sh
GET /artistmember/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                           |
| :----------: | :------: | :------------------------------------------------------------------------------------ |
| fields       | No       | Sparse fieldsets for resource types                                                   |
| filter       | No       | Filters for artist member resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                        |
| page[number] | No       | The page of artist member resources to display                                        |
| page[size]   | No       | The number of artist member resources to display for the current page                 |
| sort         | No       | The list of fields to sort the resources                                              |

## Allowed Sort Fields

|    Name    | Description                                                   |
| :--------: | :------------------------------------------------------------ |
| created_at | Sort resources on the resource creation date                  |
| updated_at | Sort resources on the resource last modified date             |
| alias      | Sort resources on distinguishing label for alias              |
| as         | Sort resources on distinguishing label for character          |

## Filters

|    Name    | Description                                                     |
| :--------: | :-------------------------------------------------------------- |
| created_at | Filter resources on the resource creation date                  |
| updated_at | Filter resources on the resource last modified date             |
| has        | Filter resources on relations within allowed include paths      |
| alias      | Filter resources on distinguishing label for alias              |
| as         | Filter resources on distinguishing label for character          |

## Response

```json
{
    artistmembers: [
        {
            created_at: "created_at",
            updated_at: "updated_at",
            alias: "alias",
            as: "as"
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
curl https://api.animethemes.moe/artistmember/
```
