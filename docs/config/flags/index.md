---
title: Flags
---

# Flags

---

The config flags API resource contains the list of feature flags that enable/disable site functionalities.

### Fields

|            Name             |  Type   | Nullable | Description                                                 |
| :-------------------------: | :-----: | :------: | :---------------------------------------------------------- |
| allow_video_streams         | Boolean | No       | Enable/Disable video streaming                              |
| allow_audio_streams         | Boolean | No       | Enable/Disable audio streaming                              |
| allow_discord_notifications | Boolean | No       | Enable/Disable discord notifications for the configured bot |
| allow_view_recording        | Boolean | No       | Enable/Disable the recording of views for view counts       |
| allow_dump_downloading      | Boolean | No       | Enable/Disable database dump downloading                    |
| allow_script_downloading    | Boolean | No       | Enable/Disable encoding script downloading                  |

### Allowed Include Paths

None

### Endpoints

**[Flags Show](/config/flags/show/)**

The Flags Show endpoint return the flags resource.