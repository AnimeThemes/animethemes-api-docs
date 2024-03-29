---
title: Audio
---

# Audio

---

An audio API resource represents the audio track of a video.

For example, the audio Bakemonogatari-OP1.ogg represents the audio track of the Bakemonogatari-OP1.webm video.

## Fields

|    Name     |  Type   | Nullable | Default | Description                                   |
| :--------:  | :-----: | :------: | :-----: | :-------------------------------------------- |
| id          | Integer | No       | Yes     | The primary key of the resource               |
| basename    | String  | No       | Yes     | The basename of the file in storage           |
| filename    | String  | No       | Yes     | The filename of the file in storage           |
| path        | String  | No       | Yes     | The path of the file in storage               |
| size        | Integer | No       | Yes     | The size of the file in storage in Bytes      |
| mimetype    | String  | No       | No      | The media type of the file in storage         |
| created_at  | Date    | No       | No      | The date that the resource was created        |
| updated_at  | Date    | No       | No      | The date that the resource was last modified  |
| deleted_at  | Date    | Yes      | No      | The date that the resource was deleted        |
| link        | String  | No       | Yes     | The URL to stream the file from storage       |
| views_count | Integer | No       | No      | The number of views recorded for the resource |

## Allowed Include Paths

* videos

## Endpoints

**[Audio Destroy](/wiki/audio/destroy/)**

The audio destroy endpoint soft deletes an audio and returns the deleted audio resource.

**[Audio Force Delete](/wiki/audio/forceDelete/)**

The audio force delete endpoint hard deletes an audio and returns a confirmation message.

**[Audio Index](/wiki/audio/index/)**

The audio index endpoint displays a listing of audio resources.

**[Audio Restore](/wiki/audio/restore/)**

The audio restore endpoint restores a soft deleted audio and returns the restored audio resource.

**[Audio Show](/wiki/audio/show/)**

The audio show endpoint returns an audio resource.

**[Audio Store](/wiki/audio/store/)**

The audio store endpoint creates a new audio and returns the new audio resource.

**[Audio Update](/wiki/audio/update/)**

The audio update endpoint updates an audio and returns the updated audio resource.