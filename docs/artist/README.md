---
title: Artist
---

# Artist

---

An artist API resource represents a musical performer of anime sequences.

For example, Chiwa Saito is the musical performer of the Bakemonogatari OP1 theme, among many others.

### Fields

|    Name    |  Type   | Nullable | Description                                                     |
| :--------: | :-----: | :------: | :-------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                 |
| name       | String  | No       | The primary title of the artist                                 |
| slug       | String  | No       | The URL slug & route key of the resource                        |
| as         | String  | No       | Used to distinguish a performance by alias, character or group  |
| created_at | Date    | No       | The date that the resource was created                          |
| updated_at | Date    | No       | The date that the resource was last modified                    |
| deleted_at | Date    | Yes      | The date that the resource was deleted                          |

### Allowed Include Paths

* groups
* images
* members
* resources
* songs
* songs.animethemes
* songs.animethemes.anime

### Endpoints

**[Artist Destroy](/artist/destroy/)**

The artist destroy endpoint soft deletes an artist and returns the deleted artist resource.

**[Artist Force Delete](/artist/forceDelete/)**

The artist force delete endpoint hard deletes an artist and returns a confirmation message.

**[Artist Index](/artist/index/)**

The artist index endpoint displays a listing of artist resources.

**[Artist Show](/artist/show/)**

The artist show endpoint returns an artist resource.

**[Artist Store](/artist/store/)**

The artist store endpoint creates a new artist and returns the new artist resource.

**[Artist Update](/artist/update/)**

The artist update endpoint updates an artist and returns the updated artist resource.