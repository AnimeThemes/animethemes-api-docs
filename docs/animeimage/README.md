---
title: Anime Image
---

# Anime Image

---

An anime image API resource represents the association between an anime and an image.

### Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |

### Allowed Include Paths

* anime
* image

### Endpoints

**[Anime Image Destroy](/animeimage/destroy/)**

The anime image destroy endpoint deletes an anime image and returns the deleted anime image resource.

**[Anime Image Index](/animeimage/index/)**

The anime image index endpoint displays a listing of anime image resources.

**[Anime Image Show](/animeimage/show/)**

The anime image show endpoint returns an anime image resource.

**[Anime Image Store](/animeimage/store/)**

The anime image store endpoint creates a new anime image and returns the new anime image resource.