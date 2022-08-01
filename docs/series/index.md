---
title: Series
---

# Series

---

A series API resource represents a collection of related anime.

For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.

### Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| id         | Integer | No       | The primary key of the resource              |
| name       | String  | No       | The primary title of the series              |
| slug       | String  | No       | The URL slug & route key of the resource     |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

### Allowed Include Paths

* anime

### Endpoints

**[Series Destroy](/series/destroy/)**

The series destroy endpoint soft deletes a series and returns the deleted series resource.

**[Series Force Delete](/series/forceDelete/)**

The series force delete endpoint hard deletes a series and returns a confirmation message.

**[Series Index](/series/index/)**

The series index endpoint displays a listing of series resources.

**[Series Show](/series/show/)**

The series show endpoint returns a series resource.

**[Series Store](/series/store/)**

The series store endpoint creates a new series and returns the new series resource.

**[Series Update](/series/update/)**

The series update endpoint updates a series and returns the updated series resource.