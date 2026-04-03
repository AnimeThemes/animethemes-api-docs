---
title: Song
---

# Song

---

A song API resource represents the composition that accompanies an AnimeTheme.

For example, Staple Stable is the song for the Bakemonogatari OP1 AnimeTheme.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource              |
| title      | String  | Yes      | Yes     | The name of the composition                  |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted       |

## Allowed Include Paths

* animethemes
* animethemes.anime
* animethemes.group
* artists
* peformances
* performances.artist
* performances.member
* resources

## Allowed Pivots

* artistsong
* songresource

## Endpoints

**[Song Destroy](/content/song/destroy/)**

The song destroy endpoint soft deletes a song and returns the deleted song resource.

**[Song Force Delete](/content/song/forceDelete/)**

The song force delete endpoint hard deletes a song and returns a confirmation message.

**[Song Index](/content/song/index/)**

The song index endpoint displays a listing of song resources.

**[Song Restore](/content/song/restore/)**

The song restore endpoint restores a soft deleted song and returns the restored song resource.

**[Song Show](/content/song/show/)**

The song show endpoint returns a song resource.

**[Song Store](/content/song/store/)**

The song store endpoint creates a new song and returns the new song resource.

**[Song Update](/content/song/update/)**

The song update endpoint updates a song and returns the updated song resource.