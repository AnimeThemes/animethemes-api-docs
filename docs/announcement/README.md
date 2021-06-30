---
title: Announcement
---

# Announcement

---

An announcement API resource represents a site-wide message to be broadcasted on the homepage. 

For example, if video streaming is disabled, the site staff may issue a "Video streaming has been disabled!" announcement.

### Fields

|    Name    |  Type   | Nullable |  Description                                 |
| :--------: | :-----: | :------: | :--------------------------------------------|
| id         | Integer | No       | The primary key of the resource              |
| content    | String  | No       | The announcement text                        |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

### Allowed Include Paths

None

### Endpoints

**[Announcement Show](/announcement/show/)**

The announcement show endpoint returns an announcement resource.

**[Announcement Index](/announcement/index/)**

The announcement index endpoint displays a listing of announcement resources.