---
title: Artist Image Index
---

# Artist Image Index Endpoint

The artist image index endpoint returns a listing of artist image resources.

## URL

```sh
GET /artistimage/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                          |
| :----------: | :------: | :----------------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                                  |
| filter       | No       | Filters for artist image resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                       |
| page[number] | No       | The page of artist image resources to display                                        |
| page[size]   | No       | The number of artist image resources to display for the current page                 |
| sort         | No       | The list of fields to sort the resources                                             |

## Allowed Sort Fields

|    Name    | Description                                       |
| :--------: | :------------------------------------------------ |
| created_at | Sort resources on the resource creation date      |
| updated_at | Sort resources on the resource last modified date |

## Filters

|    Name    | Description                                                |
| :--------: | :--------------------------------------------------------- |
| created_at | Filter resources on the resource creation date             |
| updated_at | Filter resources on the resource last modified date        |
| has        | Filter resources on relations within allowed include paths |

## Response

```json
{
    artistimages: [
        {
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
curl https://api.artistthemes.moe/artistimage/
```
