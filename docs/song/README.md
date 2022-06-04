---
title: Song
---

# Song

---

A song API resource represents the composition that accompanies an AnimeTheme.

For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.

### Fields

|    Name    |  Type   | Nullable | Description                                                    |
| :--------: | :-----: | :------: | :------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                |
| title      | String  | Yes      | The name of the composition                                    |
| as         | String  | Yes      | Used to distinguish a performance by alias, character or group |
| created_at | Date    | No       | The date that the resource was created                         |
| updated_at | Date    | No       | The date that the resource was last modified                   |
| deleted_at | Date    | Yes      | The date that the resource was deleted                         |

### Allowed Include Paths

* animethemes
* animethemes.anime
* artists

### Endpoints

**[Song Destroy](/song/destroy/)**

The song destroy endpoint soft deletes a song and returns the deleted song resource.

**[Song Force Delete](/song/forceDelete/)**

The song force delete endpoint hard deletes a song and returns a confirmation message.

**[Song Index](/song/index/)**

The song index endpoint displays a listing of song resources.

**[Song Show](/song/show/)**

The song show endpoint returns a song resource.

**[Song Store](/song/store/)**

The song store endpoint creates a new song and returns the new song resource.

**[Song Update](/song/update/)**

The song update endpoint updates a song and returns the updated song resource.