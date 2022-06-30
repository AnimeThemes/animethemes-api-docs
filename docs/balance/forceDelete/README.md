---
title: Balance Force Delete
---

<Block>

# Balance Force Delete Endpoint

The balance force delete endpoint hard deletes a balance and returns a confirmation message.

For example, the `/forceDelete/balance/1` endpoint will hard delete the balance of id '1' and return a confirmation message.

## URL

```sh
DELETE /forceDelete/balance/{id}
```

## Authentication

**Required Permission**: force delete balance

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Balance 'AWS 2022-06-01' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/balance/1
```
</CURL>

</Example>

</Block>