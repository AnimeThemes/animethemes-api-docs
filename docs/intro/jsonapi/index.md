---
title: JSON:API
---

# JSON:API

---

The AnimeThemes API selectively implements the [**JSON:API Specification**](https://jsonapi.org/format/).

Here we will provide an overview of where the AnimeThemes API adheres to or deviates from the specification.

## Content Negotiation

The AnimeThemes API does **NOT** require a `Content-Type` or `Accept` header. AnimeThemes filters API requests and sets the `Accept` header on behalf of the client.

```powershell
# A simple curl request can be made without specifying headers.
curl https://api.animethemes.moe/anime
```

## Document Structure

### Top Level

The AnimeThemes API specifies a custom `data` wrap for top-level members.

```json
// The anime show endpoint uses the custom data wrap 'anime'.
{
    anime: {
        ...
    }
}
```

### Resource Objects

The AnimeThemes API Resource Objects do **NOT** contain top-level member `type`.

```json
// Types are hinted by their custom data wrapper
{
    anime: {
        ...
    }
}
```

The AnimeThemes API Resource Object attributes are included as top-level members and are **NOT** contained in an `attributes` object.

```json
// The show anime endpoint includes attributes as top-level members
{
    anime: {
        id: id,
        name: "name",
        slug: "slug",
        year: year,
        season: "season",
        media_format: "media_format",
        synopsis: "synopsis",
        ...
    }
}
```

The AnimeThemes API Resource Objects relationships are included as top-level members and are **NOT** contained in a `relationships` object.

```json
// The show anime endpoint includes relationships as top-level members
{
    anime: {
        ...
        animesynonyms: [
            ...
        ],
        animethemes: [
            ...
        ],
        series: [
            ...
        ],
        resources: [
            ...
        ],
        images: [
            ...
        ],
        studios: [
            ...
        ],
    }
}
```

The AnimeThemes API Resource Object collections shall contain `links` and `meta` members for pagination strategies.

```json
// The anime index endpoint contains links and meta members
{
    anime: [
        {
            id: id,
            name: "name",
            slug: "slug",
            year: year,
            season: "season",
            media_format: "media_format",
            synopsis: "synopsis",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at"
        },
        ...
    ],
    links: {
        first: "first",
        last: "last",
        prev: "prev",
        next: "next"
    },
    meta: {
        current_page: current_page,
        from: from,
        path: "path",
        per_page: per_page,
        to: to
    }
}
```

## Fetching Data

### Fetching Resources & Relationships

The AnimeThemes API does **NOT** support fetching resources or relationships.

```json
// The show anime endpoint relationships can be fetched directly
{
    anime: {
        ...
        animesynonyms: [
            ...
        ],
        animethemes: [
            ...
        ],
        series: [
            ...
        ],
        resources: [
            ...
        ],
        images: [
            ...
        ],
        studios: [
            ...
        ],
    }
}
```

### Inclusion of Related Resources

The AnimeThemes API supports inclusion of related resources for every endpoint unless otherwise specified.

```json
// /anime/{slug}?include=animethemes,series
{
    anime: {
        ...
        animethemes: [
            ...
        ],
        series: [
            ...
        ],
    }
}
```

For endpoints that produce responses of mixed typed top-level members, inclusion of related resources are scoped by type `include[type]`.

```json
// /search?q={query}&include[anime]=resources
{
    search: {
        anime: [
            {
                ...
                resources: [
                    ...
                ],
            },
            ...
        ],
        ...
    }
}
```

If inclusion of related resources is not specified, the AnimeThemes API shall **NOT** include any related resources.

```json
// /anime/{slug}
// No relationships are included by default
{
    anime: {
        id: id,
        name: "name",
        slug: "slug",
        year: year,
        season: "season",
        media_format: "media_format",
        synopsis: "synopsis",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

### Sparse Fieldsets

The AnimeThemes API supports sparse fieldsets for every endpoint unless otherwise specified.

```json
// /anime/{slug}?fields[anime]=name,year
{
    anime: {
        name: "name",
        year: year
    }
}
```

If the client does not specify the set of fields for a given resource type, the AnimeThemes API shall send all fields.

```json
// /anime/{slug}
{
    anime: {
        id: id,
        name: "name",
        slug: "slug",
        year: year,
        season: "season",
        media_format: "media_format",
        synopsis: "synopsis",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

### Sorting

The AnimeThemes API supports sorting for every endpoint that returns a collection of resources.

```json
// /anime?sort=year
{
    anime: [
        {
            id: id,
            name: "name",
            slug: "slug",
            year: 1963,
            season: "season",
            media_format: "media_format",
            synopsis: "synopsis",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at"
        },
        ...
    ],
    links: {
        first: "first",
        last: "last",
        prev: "prev",
        next: "next"
    },
    meta: {
        current_page: current_page,
        from: from,
        path: "path",
        per_page: per_page,
        to: to
    }
}
```

### Pagination

The AnimeThemes API supports an offset pagination strategy for every endpoint that returns a collection of resources. For these endpoints, the AnimeThemes API supports the `page[number]` and `page[size]` query parameters.

```json
// /anime?page[number]=2&page[size]=15
{
    anime: [
        {
            id: id,
            name: "name",
            slug: "slug",
            year: year,
            season: "season",
            media_format: "media_format",
            synopsis: "synopsis",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at"
        },
        ...
    ],
    links: {
        first: "first",
        last: "last",
        prev: "prev",
        next: "next"
    },
    meta: {
        current_page: 2,
        from: 16,
        path: "path",
        per_page: 15,
        to: 30
    }
}
```

For endpoints that produce responses of mixed typed top-level members, the AnimeThemes.moe supports a limit pagination strategy. For these endpoints, the AnimeThemes API support the `page[limit]` query parameter.

```json
// /search?q={query}&page[limit]=1
{
    search: {
        anime: [
            {
                ...
                resources: [
                    ...
                ],
            }
        ],
        ...
    }
}
```

### Filtering

The AnimeThemes API supports filtering for every endpoint unless otherwise specified.

```powershell
# The show anime endpoint allows filtering on the year attribute, for example
/anime?filter[year]=2000
```

#### Strategy

The AnimeThemes API supports the [**recommended**](https://jsonapi.org/recommendations/#filtering) base strategy for filtering with the following extended syntax:

```powershell
filter[scope][field-{comparison operator}-{logical operator}]=value(s)
```

#### Scope

The AnimeThemes API supports scoping filters by resource type.

```powershell
# This will match the created_at filter for anime resources and will not apply the filter for other types
/anime?filter[anime][created_at]=2021-01-01
```

If a scope is not provided, the filter shall match all types.

```powershell
# This will match the created_at filter for all types
/anime?filter[created_at]=2021-01-01
```

#### Comparison Operator

The AnimeThemes API supports the following comparison operators for filter conditions:

##### EQ

```powershell
# This will match anime of year 2000
/anime?filter[year-eq]=2000
```

##### NE

```powershell
# This will match anime not of year 2000
/anime?filter[year-ne]=2000
```

##### LT

```powershell
# This will match anime where the year is less than 2000
/anime?filter[year-lt]=2000
```

##### GT

```powershell
# This will match anime where the year is greater than 2000
/anime?filter[year-gt]=2000
```

##### LTE

```powershell
# This will match anime where the year is less than or equal to 2000
/anime?filter[year-lte]=2000
```

##### GTE

```powershell
# This will match anime where the year is greater than 2000
/anime?filter[year-gte]=2000
```

##### LIKE

```powershell
# This will match anime where the name matches the pattern '%monogatari%'
/anime?filter[name-like]=%monogatari%
```

##### NOT LIKE

```powershell
# This will match anime where the name does not match the pattern '%monogatari%'
/anime?filter[name-notlike]=%monogatari%
```

If a comparison operator is not provided, the filter shall use the EQ operator.

```powershell
# This will match anime of year 2000
/anime?filter[year]=2000
```

#### Logical Operators

The AnimeThemes API supports the following logical operators:

##### AND

```powershell
# This will match anime where the year is greater than 2000 and less than 2010
/anime?filter[year-gt-and]=2000&filter[year-lt-and]=2010
```

##### OR

```powershell
# This will match anime where the year is less than 2000 or greater than 2010
/anime?filter[year-lt-or]=2000&filter[year-gt-or]=2010
```

If a logical operator is not provided, the filter shall use the AND operator.

```powershell
# This will match anime where the year is greater than 2000 and less than 2010
/anime?filter[year-gt]=2000&filter[year-lt]=2010
```

The AnimeThemes API supports the following logical operator for multi-value filter conditions:

##### NOT

```powershell
# This will match anime where the year is not in {2000,2001,2002}
/anime?filter[year-not]=2000,2001,2002
```

If the multi-value logical operator is not specified, the filter shall exclude the multi-value logical operator.

```powershell
# This will match anime where the year is in {2000,2001,2002}
/anime?filter[year]=2000,2001,2002
```

#### Special Filters

These filters do not act strictly against a field or are otherwise deserving of distinguishing.

##### Trashed Filter

```powershell
# This filter will include soft-deleted anime that are excluded by default
/anime?filter[trashed]=with
```

```powershell
# This filter will return only soft-deleted anime
/anime?filter[trashed]=only
```

```powershell
# This filter will return only anime that are not soft-deleted
# This is the default behavior
/anime?filter[trashed]=without
```

##### Has Filter

```powershell
# This filter will return anime that have at least one related resource
/anime?filter[has]=resources
```

```powershell
# This filter will return anime that have at least one related resource or related series
/anime?filter[has-or]=resources,series
```

```powershell
# This filter will return anime that have at least one related resource of site MyAnimeList and external_id 41457
/anime?filter[has]=resources&filter[site]=MyAnimeList&filter[external_id]=41457
```