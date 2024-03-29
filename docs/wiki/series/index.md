---
title: Series
---

# Series

---

A series API resource represents a collection of related anime.

For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource              |
| name       | String  | No       | Yes     | The primary title of the series              |
| slug       | String  | No       | Yes     | The URL slug & route key of the resource     |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted       |

## Allowed Include Paths

* anime

## Endpoints

**[Series Destroy](/wiki/series/destroy/)**

The series destroy endpoint soft deletes a series and returns the deleted series resource.

**[Series Force Delete](/wiki/series/forceDelete/)**

The series force delete endpoint hard deletes a series and returns a confirmation message.

**[Series Index](/wiki/series/index/)**

The series index endpoint displays a listing of series resources.

**[Series Restore](/wiki/series/restore/)**

The series restore endpoint restores a soft deleted series and returns the restored series resource.

**[Series Show](/wiki/series/show/)**

The series show endpoint returns a series resource.

**[Series Store](/wiki/series/store/)**

The series store endpoint creates a new series and returns the new series resource.

**[Series Update](/wiki/series/update/)**

The series update endpoint updates a series and returns the updated series resource.