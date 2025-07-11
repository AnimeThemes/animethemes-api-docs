---
title: Featured Theme Update
---

# Featured Theme Update Endpoint

The featured theme update endpoint updates a featured theme and returns the updated featured theme resource.

For example, the `/featuredtheme/1?start_at=2023-01-01` endpoint will update the featured theme start_at attribute and return the updated featured theme resource.

## URL

```sh
PUT|PATCH /featuredtheme/{id}
```

## Authentication

**Required Permission**: update featured theme

**Roles with Permission**: Admin

## Parameters

| Name     | Required | Rules                                                                              |
| :------: | :------: | :--------------------------------------------------------------------------------- |
| start_at | No       | date_format:Y-m-d\TH:i:s.u, before:end_at                                          |
| end_at   | No       | date_format:Y-m-d\TH:i:s.u, after:start_at                                         |
| entry_id | No       | integer, Entry ID Exists, Anime Theme Entry Video Exists when video_id is provided |
| user_id  | No       | integer, User ID Exists                                                            |
| video_id | No       | integer, Video ID Exists, Anime Theme Entry Video Exists when entry_id is provided |

## Response

```json
{
    featuredtheme: {
        id: id,
        start_at: "start_at",
        end_at: "end_at",
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/featuredtheme/1
```
