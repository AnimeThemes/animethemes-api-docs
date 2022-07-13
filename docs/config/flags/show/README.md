---
title: Flags Show
---

<Block>

# Flags Show Endpoint

The flags show endpoint returns the flags resource.

## URL

```sh
GET /config/flags
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |

## Response

```json
{
    flags: {
        allow_video_streams: allow_video_streams,
        allow_audio_streams: allow_audio_streams,
        allow_discord_notifications: allow_discord_notifications,
        allow_view_recording: allow_view_recording,
    }
}
```

<Example>

<CURL>
```bash
curl https://api.animethemes.moe/config/flags
```
</CURL>

</Example>

</Block>