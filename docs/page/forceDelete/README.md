---
title: Page Force Delete
---

<Block>

# Page Force Delete Endpoint

The page force delete endpoint hard deletes a page and returns a confirmation message.

For example, the `/api/forceDelete/page/encoding` endpoint will hard delete the Encoding page and return a confirmation message.

## URL

```sh
DELETE /api/forceDelete/page/{slug}
```

## Authentication

**Required Permission**: force delete page

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Page 'Encoding' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/page/encoding
```
</CURL>

</Example>

</Block>