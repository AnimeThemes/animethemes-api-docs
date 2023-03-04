---
title: Artist Image
---

# Artist Image

---

An artist image API resource represents the association between an artist and an image.

## Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |

## Allowed Include Paths

* artist
* image

## Endpoints

**[Artist Image Destroy](/wiki/artistimage/destroy/)**

The artist image destroy endpoint deletes an artist image and returns the deleted artist image resource.

**[Artist Image Index](/wiki/artistimage/index/)**

The artist image index endpoint displays a listing of artist image resources.

**[Artist Image Show](/wiki/artistimage/show/)**

The artist image show endpoint returns an artist image resource.

**[Artist Image Store](/wiki/artistimage/store/)**

The artist image store endpoint creates a new artist image and returns the new artist image resource.