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

**[Announcement Destroy](/announcement/destroy/)**

The announcement destroy endpoint soft deletes an announcement and returns the deleted announcement resource.

**[Announcement Force Delete](/announcement/forceDelete/)**

The announcement force delete endpoint hard deletes an announcement and returns a confirmation message.

**[Announcement Index](/announcement/index/)**

The announcement index endpoint displays a listing of announcement resources.

**[Announcement Show](/announcement/show/)**

The announcement show endpoint returns an announcement resource.

**[Announcement Store](/announcement/store/)**

The announcement store endpoint creates a new announcement and returns the new announcement resource.

**[Announcement Update](/announcement/update/)**

The announcement update endpoint updates an announcement and returns the updated announcement resource.