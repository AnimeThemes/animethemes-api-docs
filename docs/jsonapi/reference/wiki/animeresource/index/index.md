---
title: Anime Resource Index
---

# Anime Resource Index Endpoint

The anime resource index endpoint returns a listing of anime resource resources.

## URL

```sh
GET /animeresource/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| filter       | No       | Filters for anime resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                |
| page[number] | No       | The page of anime resource resources to display                               |
| page[size]   | No       | The number of anime resource resources to display for the current page        |
| sort         | No       | The list of fields to sort the resources                                      |

## Allowed Sort Fields

|    Name    | Description                                       |
| :--------: | :------------------------------------------------ |
| created_at | Sort resources on the resource creation date      |
| updated_at | Sort resources on the resource last modified date |
| as         | Sort resources on distinguishing label            |

## Filters

|    Name    | Description                                                |
| :--------: | :--------------------------------------------------------- |
| created_at | Filter resources on the resource creation date             |
| updated_at | Filter resources on the resource last modified date        |
| as         | Filter resources on the resource distinguishing label      |
| has        | Filter resources on relations within allowed include paths |

## Response

```json
{
    animeresources: [
        {
            created_at: "created_at",
            updated_at: "updated_at",
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
curl https://api.animethemes.moe/animeresource/
```
