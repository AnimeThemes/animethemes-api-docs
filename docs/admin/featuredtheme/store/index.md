---
title: Featured Theme Store
---

# Featured Theme Store Endpoint

The featured theme store endpoint creates a new featured theme and returns the new featured theme resource.

For example, the `/featuredtheme?start_at=2023-01-01&end_at=2023-01-07` endpoint will create a new featured theme and return the new featured theme resource.

## URL

```sh
POST /featuredtheme
```

## Authentication

**Required Permission**: create featured theme

**Roles with Permission**: Admin

## Parameters

| Name     | Required | Rules                                                                              |
| :------: | :------: | :--------------------------------------------------------------------------------- |
| start_at | Yes      | date_format:Y-m-d\TH:i:s.u, before:end_at                                          |
| end_at   | Yes      | date_format:Y-m-d\TH:i:s.u, after:start_at                                         |
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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/featuredtheme/
```
