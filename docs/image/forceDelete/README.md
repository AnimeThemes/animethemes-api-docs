---
title: Image Force Delete
---

<Block>

# Image Force Delete Endpoint

The image force delete endpoint hard deletes an image resource and returns a confirmation message.

For example, the `/api/forceDelete/image/435` endpoint will hard delete the large cover image for the Bakemonogatari anime and return a confirmation message.

## URL

```sh
DELETE /api/forceDelete/image/{id}
```

## Authentication

**Required Permission**: force delete image

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Image 'OoMI35OjrpjORDlWJvFAZzQOD0vIH1oBQClClSIU.png' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/image/435
```
</CURL>

</Example>

</Block>