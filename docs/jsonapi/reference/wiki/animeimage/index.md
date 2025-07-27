---
title: Anime Image
---

# Anime Image

---

An anime image API resource represents the association between an anime and an image.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |

## Allowed Include Paths

* anime
* image

## Endpoints

**[Anime Image Destroy](/wiki/animeimage/destroy/)**

The anime image destroy endpoint deletes an anime image and returns the deleted anime image resource.

**[Anime Image Index](/wiki/animeimage/index/)**

The anime image index endpoint displays a listing of anime image resources.

**[Anime Image Show](/wiki/animeimage/show/)**

The anime image show endpoint returns an anime image resource.

**[Anime Image Store](/wiki/animeimage/store/)**

The anime image store endpoint creates a new anime image and returns the new anime image resource.