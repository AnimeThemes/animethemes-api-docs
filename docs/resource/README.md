---
title: Resource
---

# Resource

---

An external API resource represents a site with supplementary information for another resource such as an anime or artist.

For example, the Bakemonogatari anime has MyAnimeList, AniList and AniDB resources.

### Fields

|    Name     |  Type   | Nullable | Description                                                        |
| :---------: | :-----: | :------: | :------------------------------------------------------------------|
| id          | Integer | No       | The primary key of the resource                                    |
| link        | String  | Yes      | The URL of the external site                                       |
| external_id | Integer | Yes      | The primary key of the resource in the external site               |
| site        | Enum    | Yes      | The external site that the resource belongs to {Official Website, Twitter, AniDB, Anilist, Anime-Planet, Anime News Network, Kitsu, MyAnimeList, Wikipedia} |
| as          | String  | Yes      | Used to distinguish resources that map to the same artist or anime |
| created_at  | Date    | No       | The date that the resource was created                             |
| updated_at  | Date    | No       | The date that the resource was last modified                       |
| deleted_at  | Date    | Yes      | The date that the resource was deleted                             |

### Allowed Include Paths

* anime
* artists
* studios

### Endpoints

**[Resource Show](/resource/show/)**

The resource show endpoint returns an external resource.

**[Resource Index](/resource/index/)**

The resource index endpoint displays a listing of external resources.