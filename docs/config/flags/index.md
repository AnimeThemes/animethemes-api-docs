---
title: Flags
---

# Flags

---

The config flags API resource contains the list of feature flags that enable/disable site functionalities.

## Fields

|            Name             |  Type   | Nullable | Default | Description                                                 |
| :-------------------------: | :-----: | :------: | :-----: | :---------------------------------------------------------- |
| allow_video_streams         | Boolean | No       | Yes     | Enable/Disable video streaming                              |
| allow_audio_streams         | Boolean | No       | Yes     | Enable/Disable audio streaming                              |
| allow_discord_notifications | Boolean | No       | Yes     | Enable/Disable discord notifications for the configured bot |
| allow_view_recording        | Boolean | No       | Yes     | Enable/Disable the recording of views for view counts       |
| allow_dump_downloading      | Boolean | No       | Yes     | Enable/Disable database dump downloading                    |
| allow_script_downloading    | Boolean | No       | Yes     | Enable/Disable encoding script downloading                  |

## Allowed Include Paths

None

### Endpoints

**[Flags Show](/config/flags/show/)**

The Flags Show endpoint return the flags resource.