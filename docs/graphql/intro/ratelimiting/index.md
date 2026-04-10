---
title: Rate Limiting
---

# Rate Limiting

---

The AnimeThemes GraphQL API applies the standard named rate limiter of the Laravel Framework.

Here we will provide an overview of managing request quotas.

## Response Headers

The AnimeThemes GraphQL API limits 90 requests per minute.

The AnimeThemes API will return `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers in the response.

```sh
...
X-RateLimit-Limit: 90
X-RateLimit-Remaining: 89
...
```

## Exceeding the Rate Limit

If the rate limit is exceeded, the AnimeThemes API will return `Retry-After` and `X-RateLimit-Reset` headers in the response with a 429 status code.

```sh
...
X-RateLimit-Limit: 90
X-RateLimit-Remaining: 0
Retry-After: 60
X-RateLimit-Reset: 1625073463180
...
```

Additionally, the AnimeThemes API will return an error message in the response body.

```json
{
    message: "Too Many Attempts."
}
```

## Query Depth Limit

Clients can nest fields within other fields, which can quickly result in deeply nested queries.

The AnimeThemes GraphQL API enforces a maximum query depth of 13.

If your query exceeds this limit, the API will return a 200 status code with the following error response:

```json
{
    "errors": [
        {
            "message": "Max query depth should be 13 but got 16."
        }
    ]
}
```

## Query Complexity Limit

Clients can request a lot of fields, can nest fields within other fields, which can quickly result in deeply nested queries.

The AnimeThemes GraphQL API enforces a maximum of 250 fields per request.

If your query exceeds this limit, the API will return a 200 status code with the following error response:

```json
{
    "errors": [
        {
            "message": "Max query complexity should be 250 but got 300."
        }
    ]
}
```