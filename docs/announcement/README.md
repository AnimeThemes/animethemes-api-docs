---
title: Announcement
---

# Announcement

---

An announcement API resource represents a site-wide message to be broadcasted on the homepage. 

For example, if video streaming is disabled, the site staff may issue a "Video streaming has been disabled!" announcement.

### Fields

|    Name    |  Type   | Description                                                     |
| :--------: | :-----: | :-------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                 |
| content    | String  | The announcement text                                           |
| created_at | Date    | The date that the resource was created                          |
| updated_at | Date    | The date that the resource was last modified                    |
| deleted_at | Date    | The date that the resource was deleted                          |

### Allowed Include Paths

None

### Endpoints

**[Announcement Show](/announcement/show/)**

The announcement show endpoint returns an announcement resource.

**[Announcement Index](/announcement/index/)**

The announcement index endpoint displays a listing of announcement resources.