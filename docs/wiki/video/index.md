---
title: Video
---

# Video

---

A video API resource represents a WebM of an anime theme.

For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.

### Fields

|    Name    |  Type   | Nullable | Description                                                                           |
| :--------: | :-----: | :------: | :------------------------------------------------------------------------------------ |
| id         | Integer | No       | The primary key of the resource                                                       |
| basename   | String  | No       | The basename of the file in storage                                                   |
| filename   | String  | No       | The filename of the file in storage                                                   |
| path       | String  | No       | The path of the file in storage                                                       |
| size       | Integer | No       | The size of the file in storage in Bytes                                              |
| mimetype   | String  | No       | The media type of the file in storage                                                 |
| resolution | Integer | Yes      | The frame height of the file in storage                                               |
| nc         | Boolean | No       | Is the video creditless?                                                              |
| subbed     | Boolean | No       | Does the video include subtitles of dialogue?                                         |
| lyrics     | Boolean | No       | Does the video include subtitles of song lyrics?                                      |
| uncen      | Boolean | No       | Is the video an uncensored version of a censored sequence?                            |
| source     | Enum    | Yes      | Where did this video come from? [WEB, RAW, BD, DVD, VHS, LD]                          |
| overlap    | Enum    | No       | The degree to which the sequence and episode content overlap [None, Transition, Over] |
| tags       | String  | No       | The attributes used to distinguish the file within the context of a theme             |
| link       | String  | No       | The URL to stream the file from storage                                               |
| created_at | Date    | No       | The date that the resource was created                                                |
| updated_at | Date    | No       | The date that the resource was last modified                                          |
| deleted_at | Date    | Yes      | The date that the resource was deleted                                                |

### Allowed Include Paths

* animethemeentries
* animethemeentries.animetheme
* animethemeentries.animetheme.anime
* audio
* videoscript

### Endpoints

**[Video Destroy](/wiki/video/destroy/)**

The video destroy endpoint soft deletes a video and returns the deleted video resource.

**[Video Force Delete](/wiki/video/forceDelete/)**

The video force delete endpoint hard deletes a video and returns a confirmation message.

**[Video Index](/wiki/video/index/)**

The video index endpoint displays a listing of video resources.

**[Video Restore](/wiki/video/restore/)**

The video restore endpoint restores a soft deleted video and returns the restored video resource.

**[Video Show](/wiki/video/show/)**

The video show endpoint returns a video resource.

**[Video Store](/wiki/video/store/)**

The video store endpoint creates a new video and returns the new video resource.

**[Video Update](/wiki/video/update/)**

The video update endpoint updates a video and returns the updated video resource.