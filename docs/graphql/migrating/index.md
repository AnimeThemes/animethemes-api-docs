---
title: Migrating from JSON:API
---

# Migrating from JSON:PI

---

While writing the GraphQL API, it was decided to make some changes to follow the [best practices recommended by GraphQL](https://graphql.org/learn/best-practices/).

## Field names

Fields in the JSON:API are snake_case, but now it is camelCase instead.

Affected Fields:

* featured_theme.start_at -> FeaturedTheme.startAt
* featured_theme.end_at -> FeaturedTheme.endAt
* me.email_verified_at -> Me.emailVerifiedAt
* me.two_factor_confirmed_at -> Me.twoFactorConfirmedAt
* guard_name -> guardName (removed)
* anime.media_format -> Anime.format
* anime.name -> Anime.title.romaji
* animethemes -> themes
* animethemeentries -> entries
* artist.name -> Artist.name.main
* external_resource.external_id -> ExternalResource.externalId
* series.name -> Series.title.romaji
* song.title -> Song.title.romaji
* created_at -> createdAt
* updated_at -> updatedAt
* deleted_at (removed)