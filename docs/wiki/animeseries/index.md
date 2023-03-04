---
title: Anime Series
---

# Anime Series

---

An anime series API resource represents the association between an anime and a series.

## Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |

## Allowed Include Paths

* anime
* series

## Endpoints

**[Anime Series Destroy](/wiki/animeseries/destroy/)**

The anime series destroy endpoint deletes an anime series and returns the deleted anime series resource.

**[Anime Series Index](/wiki/animeseries/index/)**

The anime series index endpoint displays a listing of anime series resources.

**[Anime Series Show](/wiki/animeseries/show/)**

The anime series show endpoint returns an anime series resource.

**[Anime Series Store](/wiki/animeseries/store/)**

The anime series store endpoint creates a new anime series and returns the new anime series resource.