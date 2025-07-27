---
title: Artist Image
---

# Artist Image

---

An artist image API resource represents the association between an artist and an image.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |
| depth      | Int     | Yes      | No      | Used to sort the artist images               |

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

**[Artist Image Update](/wiki/artistimage/update/)**

The artist image update endpoint updates an artist image and returns the updated artist image resource.