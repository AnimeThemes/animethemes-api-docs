---
title: Year Index
---

<Block>

# Year Index Endpoint

The year index endpoint returns a list of unique years from all anime resources.

## URL

```sh
GET /api/year/
```

## Parameters

None

## Response

```json
Status: 200

[
    1963,
    1964,
    1965,
    ...
]
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/year/
```
</CURL>

</Example>

</Block>