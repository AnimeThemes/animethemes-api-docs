---
title: Artist Song
---

# Artist Song

---

An artist song API resource represents the association between an artist and an song.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                                    |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created                         |
| updated_at | Date    | No       | No      | The date that the resource was last modified                   |
| as         | String  | Yes       | Yes    | Used to distinguish a performance by alias                     |
| as         | String  | Yes       | Yes    | Used to distinguish a performance by character                 |

## Allowed Include Paths

* artist
* song

## Endpoints

**[Artist Song Destroy](/wiki/artistsong/destroy/)**

The artist song destroy endpoint deletes an artist song and returns the deleted artist song resource.

**[Artist Song Index](/wiki/artistsong/index/)**

The artist song index endpoint displays a listing of artist song resources.

**[Artist Song Show](/wiki/artistsong/show/)**

The artist song show endpoint returns an artist song resource.

**[Artist Song Store](/wiki/artistsong/store/)**

The artist song store endpoint creates a new artist song and returns the new artist song resource.

**[Artist Song Update](/wiki/artistsong/update/)**

The artist song update endpoint updates an artist song and returns the updated artist song resource.