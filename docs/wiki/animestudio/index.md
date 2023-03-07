---
title: Anime Studio
---

# Anime Studio

---

An anime studio API resource represents the association between an anime and a studio.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |

## Allowed Include Paths

* anime
* studio

## Endpoints

**[Anime Studio Destroy](/wiki/animestudio/destroy/)**

The anime studio destroy endpoint deletes an anime studio and returns the deleted anime studio resource.

**[Anime Studio Index](/wiki/animestudio/index/)**

The anime studio index endpoint displays a listing of anime studio resources.

**[Anime Studio Show](/wiki/animestudio/show/)**

The anime studio show endpoint returns an anime studio resource.

**[Anime Studio Store](/wiki/animestudio/store/)**

The anime studio store endpoint creates a new anime studio and returns the new anime studio resource.