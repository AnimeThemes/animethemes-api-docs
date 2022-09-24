---
title: Video Script
---

# Video Script

---

A video script API resource represents an encoding script used to produce a video. 

For example, the 2009/Summer/Bakemonogatari-OP1.txt video script represents the encoding script of the Bakemonogatari-OP1.webm video.

### Fields

|    Name    |  Type   | Nullable |  Description                                 |
| :--------: | :-----: | :------: | :--------------------------------------------|
| id         | Integer | No       | The primary key of the resource              |
| path       | String  | No       | The path of the file in storage              |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |
| link       | String  | No       | The URL to download the file from storage    |

### Allowed Include Paths

* video

### Endpoints

**[Video Script Destroy](/videoscript/destroy/)**

The video script destroy endpoint soft deletes a video script and returns the deleted video script resource.

**[Video Script Force Delete](/videoscript/forceDelete/)**

The video script force delete endpoint hard deletes a video script and returns a confirmation message.

**[Video Script Index](/videoscript/index/)**

The video script index endpoint displays a listing of video script resources.

**[Video Script Show](/videoscript/show/)**

The video script show endpoint returns a video script resource.

**[Video Script Store](/videoscript/store/)**

The video script store endpoint creates a new video script and returns the new video script resource.

**[Video Script Update](/videoscript/update/)**

The video script update endpoint updates a video script and returns the updated video script resource.