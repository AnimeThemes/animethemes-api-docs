---
title: Resource Update
---

<Block>

# Resource Update Endpoint

The resource update endpoint updates an external resource and returns the updated external resource.

For example, the `/api/resource/1083?external_id=5081` endpoint will update the external resource external_id attribute and return the updated external resource.

## URL

```sh
PUT|PATCH /api/resource/{id}
```

## Authentication

**Required Permission**: update external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name        | Required | Rules                                                                                                                  |
| :---------: | :------: | :--------------------------------------------------------------------------------------------------------------------- |
| link        | No       | max:192, url, link matches site                                                                                        |
| external_id | No       | integer, min:0                                                                                                         |
| site        | No       | EnumValue {Official Website, Twitter, AniDB, Anilist, Anime-Planet, Anime News Network, Kitsu, MyAnimeList, Wikipedia} |

## Response

```json
{
    resource: {
        id: id,
        link: "link",
        external_id: external_id,
        site: "site",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        link: "link"
    }
}
```

<Example>

<CURL>
```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/resource/1083
```
</CURL>

</Example>

</Block>