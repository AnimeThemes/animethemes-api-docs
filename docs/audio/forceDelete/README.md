---
title: Audio Force Delete
---

<Block>

# Audio Force Delete Endpoint

The audio force delete endpoint hard deletes an audio and returns a confirmation message.

For example, the `/forceDelete/audio/Bakemonogatari-OP1.ogg` endpoint will hard delete the Bakemonogatari-OP1.ogg audio and return a confirmation message.

## URL

```sh
DELETE /forceDelete/audio/{basename}
```

## Authentication

**Required Permission**: force delete audio

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Audio 'Bakemonogatari-OP1.ogg' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/audio/Bakemonogatari-OP1.ogg
```
</CURL>

</Example>

</Block>