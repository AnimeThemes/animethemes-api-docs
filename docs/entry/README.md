---
title: Entry
---

# Entry

---

An entry API resource represents a version of an anime theme.

For example, the Bakemonogatari ED theme has three entries to represent three versions.

### Fields

|    Name    |  Type   | Description                                                     |
| :--------: | :-----: | :-------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                 |
| version    | Integer | The version number of the theme                                 |
| episodes   | String  | The URL slug & route key of the resource                        |
| nsfw       | Boolean | Is not safe for work content included?                          |
| spoiler    | Boolean | Is content included that may spoil the viewer?                  |
| notes      | String  | Any additional information for this sequence                    |
| created_at | Date    | The date that the resource was created                          |
| updated_at | Date    | The date that the resource was last modified                    |
| deleted_at | Date    | The date that the resource was deleted                          |

### Allowed Include Paths

* theme
* theme.anime
* videos

### Endpoints

**[Entry Show](/entry/show/)**

The entry show endpoint returns an entry resource.

**[Entry Index](/entry/index/)**

The entry index endpoint displays a listing of entry resources.