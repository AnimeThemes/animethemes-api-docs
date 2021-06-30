---
title: Video
---

# Video

---

A video API resource represents a WebM of an anime theme.

For example, the video Bakemonogatari-OP1.webm represents the WebM of the Bakemonogatari OP1 theme.

### Fields

|    Name    |  Type   | Description                                                                |
| :--------: | :-----: | :------------------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                            |
| basename   | String  | The basename of the file in storage                                        |
| filename   | String  | The filename of the file in storage                                        |
| path       | String  | The path of the file in storage                                            |
| size       | Integer | The size of the file in storage in Bytes                                   |
| mimetype   | String  | The media type of the file in storage                                      |
| resolution | Integer | The frame height of the file in storage                                    |
| nc         | Boolean | Is the video creditless?                                                   |
| subbed     | Boolean | Does the video include subtitles of dialogue?                              |
| lyrics     | Boolean | Does the video include subtitles of song lyrics?                           |
| uncen      | Boolean | Is the video an uncensored version of a censored sequence?                 |
| source     | Enum    | Where did this video come from? {WEB, RAW, BD, DVD, VHS, LD}               |
| overlap    | Enum    | The degree to which the sequence and episode content overlap {None, Transition, Over} |
| tags       | String  | The attributes used to distinguish the file within the context of a theme  |
| link       | String  | The URL to stream the file from storage                                    |
| created_at | Date    | The date that the resource was created                                     |
| updated_at | Date    | The date that the resource was last modified                               |
| deleted_at | Date    | The date that the resource was deleted                                     |

### Allowed Include Paths

* entries
* entries.theme
* entries.theme.anime

### Endpoints

**[Video Show](/video/show/)**

The video show endpoint returns a video resource.

**[Video Index](/video/index/)**

The video index endpoint displays a listing of video resources.