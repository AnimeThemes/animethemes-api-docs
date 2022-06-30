---
title: Transaction Force Delete
---

<Block>

# Transaction Force Delete Endpoint

The transaction force delete endpoint hard deletes a transaction and returns a confirmation message.

For example, the `/forceDelete/transaction/1` endpoint will hard delete the transaction of id '1' and return a confirmation message.

## URL

```sh
DELETE /forceDelete/transaction/{id}
```

## Authentication

**Required Permission**: force delete transaction

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Transaction 'AWS 2022-06-01' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/transaction/1
```
</CURL>

</Example>

</Block>