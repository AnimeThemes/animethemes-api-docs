---
title: Validation
---

# Validation

---

The AnimeThemes GraphQL API follows the [GraphQL official error handling specification](https://graphql.org/learn/response/#errors).

Whenever a validation error occurs, the API will still return an HTTP 200 status code. Instead of relying on status codes to indicate failure, errors are reported in the `errors` array within the response body.

Validation can fail for several reasons, including:

* An invalid query structure
* Missing required arguments
* Incorrect argument types or values

### Example

Consider the `findAnimeByExternalSite` query. This query requires at least one of the following arguments to function properly: `id` or `link`.

If neither argument is provided, the API will return an HTTP 200 response with an errors array describing the validation issue, similar to the following JSON:

```json
{
    "errors": [
        {
            "message": "The id field is required when link is not present. (and 1 more error)",
            "locations": [
                {
                    "line": 2,
                    "column": 2
                }
            ],
            "path": [
                "findAnimeByExternalSite"
            ],
            "extensions": {
                "validation": {
                    "id": [
                        "The id field is required when link is not present."
                    ],
                    "link": [
                        "The link field is required when id is not present."
                    ]
                }
            }
        }
    ]
}
```

