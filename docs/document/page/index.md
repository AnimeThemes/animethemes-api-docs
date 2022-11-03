---
title: Page
---

# Page

---

A page API resource represents a static markdown page used for guides and other documentation.

For example, the 'encoding/audio_normalization' page represents the documentation for audio normalization.

## Fields

|    Name    |  Type   | Nullable |  Description                                 |
| :--------: | :-----: | :------: | :--------------------------------------------|
| id         | Integer | No       | The primary key of the resource              |
| name       | String  | No       | The primary title of the page                |
| slug       | String  | No       | The URL slug & route key of the resource     |
| body       | String  | No       | The body content of the resource             |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

## Allowed Include Paths

None

## Endpoints

**[Page Destroy](/document/page/destroy/)**

The page destroy endpoint soft deletes a page and returns the deleted page resource.

**[Page Force Delete](/document/page/forceDelete/)**

The page force delete endpoint hard deletes a page and returns a confirmation message.

**[Page Index](/document/page/index/)**

The page index endpoint displays a listing of page resources.

**[Page Restore](/document/page/restore/)**

The page restore endpoint restores a soft deleted page and returns the restored page resource.

**[Page Show](/document/page/show/)**

The page show endpoint returns a page resource.

**[Page Store](/document/page/store/)**

The page store endpoint creates a new page and returns the new page resource.

**[Page Update](/document/page/update/)**

The page update endpoint updates a page and returns the updated page resource.