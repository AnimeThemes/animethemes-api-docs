---
title: Studio Image
---

# Studio Image

---

A studio image API resource represents the association between a studio and an image.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |

## Allowed Include Paths

* studio
* image

## Endpoints

**[Studio Image Destroy](/wiki/studioimage/destroy/)**

The studio image destroy endpoint deletes a studio image and returns the deleted studio image resource.

**[Studio Image Index](/wiki/studioimage/index/)**

The studio image index endpoint displays a listing of studio image resources.

**[Studio Image Show](/wiki/studioimage/show/)**

The studio image show endpoint returns a studio image resource.

**[Studio Image Store](/wiki/studioimage/store/)**

The studio image store endpoint creates a new studio image and returns the new studio image resource.