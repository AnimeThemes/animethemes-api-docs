---
title: Filtering
---

# Filtering

---

Most queries provide some filtering arguments using the AND operator. Filters are set under the `filter` input argument.

Query example:
```graphql
query {
    animeConnection(filter: { titleLike: "%monogatari%" }) {
        nodes {
            title {
                romaji
            }
        }
    }
}
```