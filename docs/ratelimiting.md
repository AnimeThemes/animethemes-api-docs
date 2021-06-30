---
title: Rate Limiting
---

# Rate Limiting

---

The AnimeThemes API applies the standard named rate limiter of the Laravel Framework.

Here we will provide an overview of managing request quotas.

## Response Headers

The AnimeThemes API limits requests to 60 per minute.

The AnimeThemes API will return `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers in the response.

```sh
...
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
...
```

If the rate limit is exceeded, the AnimeThemes API will return `Retry-After` and `X-RateLimit-Reset` headers in the response.

```sh
...
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
Retry-After: 60
X-RateLimit-Reset: 1625073463180
...
```

```json
{
    errors: [
        {
            status: "429",
            code: "1",
            title: "throttle_requests_exception",
            detail: "ThrottleRequestsException",
            source: {
              pointer: ""
            }
        }
    ]
}
```