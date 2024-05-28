---
title: Featured Theme
---

# Featured Theme

---

A featured theme API resource represents a video to be featured on the homepage of the site for a specified amount of time.

## Fields

|    Name    |  Type   | Nullable | Default |  Description                                 |
| :--------: | :-----: | :------: | :-----: | :--------------------------------------------|
| id         | Integer | No       | Yes     | The primary key of the resource              |
| start_at   | Date    | No       | Yes     | The start date of the resource               |
| end_at     | Date    | No       | Yes     | The end date of the resource                 |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted       |

## Allowed Include Paths

* animethemeentry
* animethemeentry.animetheme
* animethemeentry.animetheme.anime
* animethemeentry.animetheme.anime.images
* animethemeentry.animetheme.group
* animethemeentry.animetheme.song
* animethemeentry.animetheme.song.artists
* user
* video

## Endpoints

**[Current Featured Theme Show](/admin/featuredtheme/current/)**

The current featured theme show endpoint returns the first featured theme where the current date is between start_at and end_at dates.

**[Featured Theme Destroy](/admin/featuredtheme/destroy/)**

The featured theme destroy endpoint soft deletes a featured theme and returns the deleted featured theme resource.

**[Featured Theme Force Delete](/admin/featuredtheme/forceDelete/)**

The featured theme force delete endpoint hard deletes a featured theme and returns a confirmation message.

**[Featured Theme Index](/admin/featuredtheme/index/)**

The featured theme index endpoint displays a listing of featured theme resources.

**[Featured Theme Restore](/admin/featuredtheme/restore/)**

The featured theme restore endpoint restores a soft deleted featured theme and returns the restored featured theme resource.

**[Featured Theme Show](/admin/featuredtheme/show/)**

The featured theme show endpoint returns a featured theme resource.

**[Featured Theme Store](/admin/featuredtheme/store/)**

The featured theme store endpoint creates a new featured theme and returns the new featured theme resource.

**[Featured Theme Update](/admin/featuredtheme/update/)**

The featured theme update endpoint updates a featured theme and returns the updated featured theme resource.