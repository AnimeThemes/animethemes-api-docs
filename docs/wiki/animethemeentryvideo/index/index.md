---
title: Anime Theme Entry Video Index
---

# Anime Theme Entry Video Index Endpoint

The anime theme entry video index endpoint returns a listing of anime theme entry video resources.

## URL

```sh
GET /animethemeentryvideo/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                                     |
| :----------: | :------: | :---------------------------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                                             |
| filter       | No       | Filters for anime theme entry video resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                                  |
| page[number] | No       | The page of anime theme entry video resources to display                                        |
| page[size]   | No       | The number of anime theme entry video resources to display for the current page                 |
| sort         | No       | The list of fields to sort the resources                                                        |

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
    animethemeentryvideos: [
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
curl https://api.animethemes.moe/animethemeentryvideo/
```
