---
title: Song
---

# Song

---

A song API resource represents the composition that accompanies an anime theme.

For example, Staple Stable is the song for the Bakemonogatari OP1 theme.

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

* themes
* themes.anime
* artists

### Endpoints

**[Song Show](/song/show/)**

The song show endpoint returns a song resource.

**[Song Index](/song/index/)**

The song index endpoint displays a listing of song resources.