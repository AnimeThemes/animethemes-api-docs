---
title: Image Index
---

# Image Index Endpoint

The image index endpoint returns a listing of image resources.

## URL

```sh
GET /image/
```

## Authentication

None

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| filter       | No       | Filters for anime resources & constraining the inclusion of related resources |
| include      | No       | Inclusion of related resources                                                |
| page[number] | No       | The page of anime resources to display                                        |
| page[size]   | No       | The number of anime resources to display for the current page                 |
| sort         | No       | The list of fields to sort the resources                                      |

## Allowed Sort Fields

|    Name    | Description                                                         |
| :--------: | :------------------------------------------------------------------ |
| id         | Sort resources on the primary key                                   |
| path       | Sort resources on the path of the file in storage                   |
| size       | Sort resources on the size of the file in storage in Bytes          |
| mimetype   | Sort resources on the media type of the file in storage             |
| facet      | Sort resources on the component that the image is intended for      |
| created_at | Sort resources on the resource creation date                        |
| updated_at | Sort resources on the resource last modified date                   |
| deleted_at | Sort resources on the resource deletion date                        |
| random     | Sort resources randomly. Ignored if other sort fields are provided. |

## Filters

|    Name    | Description                                                        |
| :--------: | :----------------------------------------------------------------- |
| id         | Filter resources on the primary key                                |
| path       | Filter resources on the path of the file in storage                |
| size       | Filter resources on the size of the file in storage                |
| mimetype   | Filter resources on the media type of the file in storage          |
| facet      | Filter resources on the component that the image is intended for   |
| created_at | Filter resources on the resource creation date                     |
| updated_at | Filter resources on the resource last modified date                |
| deleted_at | Filter resources on the resource deletion date                     |
| trashed    | Filter resources on trashed (deleted) status [With, Without, Only] |
| has        | Filter resources on relations within allowed include paths         |

## Response

```json
{
    images: [
        {
            id: id,
            path: "path",
            size: size,
            mimetype: "mimetype",
            facet: "facet",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at",
            link: "link"
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
curl https://api.animethemes.moe/image/
```
