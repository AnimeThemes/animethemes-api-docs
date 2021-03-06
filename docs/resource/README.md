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

**[Resource Destroy](/resource/destroy/)**

The resource destroy endpoint soft deletes an external resource and returns the deleted external resource.

**[Resource Force Delete](/resource/forceDelete/)**

The resource force delete endpoint hard deletes an external resource and returns a confirmation message.

**[Resource Index](/resource/index/)**

The resource index endpoint returns a listing of external resources.

**[Resource Show](/resource/show/)**

The resource show endpoint returns an external resource.

**[Resource Store](/resource/store/)**

The resource store endpoint creates a new external resource and returns the new external resource.

**[Resource Update](/resource/update/)**

The resource update endpoint updates an external resource and returns the updated external resource.