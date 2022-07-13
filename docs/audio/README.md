---
title: Audio
---

# Audio

---

An audio API resource represents the audio track of a video.

For example, the audio Bakemonogatari-OP1.ogg represents the audio track of the Bakemonogatari-OP1.webm video.

### Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| id         | Integer | No       | The primary key of the resource              |
| basename   | String  | No       | The basename of the file in storage          |
| filename   | String  | No       | The filename of the file in storage          |
| path       | String  | No       | The path of the file in storage              |
| size       | Integer | No       | The size of the file in storage in Bytes     |
| mimetype   | String  | No       | The media type of the file in storage        |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

### Allowed Include Paths

None

### Endpoints

**[Audio Destroy](/audio/destroy/)**

The audio destroy endpoint soft deletes an audio and returns the deleted audio resource.

**[Audio Force Delete](/audio/forceDelete/)**

The audio force delete endpoint hard deletes an audio and returns a confirmation message.

**[Audio Index](/audio/index/)**

The audio index endpoint displays a listing of audio resources.

**[Audio Show](/audio/show/)**

The audio show endpoint returns an audio resource.

**[Audio Store](/audio/store/)**

The audio store endpoint creates a new audio and returns the new audio resource.

**[Audio Update](/audio/update/)**

The audio update endpoint updates an audio and returns the updated audio resource.