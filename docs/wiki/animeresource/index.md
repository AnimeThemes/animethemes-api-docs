---
title: Anime Resource
---

# Anime Resource

---

An anime resource API resource represents the association between an anime and an external resource.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                              |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created                   |
| updated_at | Date    | No       | No      | The date that the resource was last modified             |
| as         | String  | No       | Yes     | Used to distinguish resources that map to the same anime |

## Allowed Include Paths

* anime
* resource

## Endpoints

**[Anime Resource Destroy](/wiki/animeresource/destroy/)**

The anime resource destroy endpoint deletes an anime resource and returns the deleted anime resource resource.

**[Anime Resource Index](/wiki/animeresource/index/)**

The anime resource index endpoint displays a listing of anime resource resources.

**[Anime Resource Show](/wiki/animeresource/show/)**

The anime resource show endpoint returns an anime resource resource.

**[Anime Resource Store](/wiki/animeresource/store/)**

The anime resource store endpoint creates a new anime resource and returns the new anime resource resource.

**[Anime Resource Update](/wiki/animeresource/update/)**

The anime resource update endpoint updates an anime resource and returns the updated anime resource resource.