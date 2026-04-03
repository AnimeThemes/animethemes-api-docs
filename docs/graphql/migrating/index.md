---
title: Migrating from JSON:API
---

# Migrating from JSON:PI

---

While writing the GraphQL API, it was decided to make some changes to follow the [best practices recommended by GraphQL](https://graphql.org/learn/best-practices/).

## Field names

Fields in the JSON:API are snake_case, but now it is camelCase instead.

Affected Fields:

* start_at -> startAt
* end_at -> endAt
* email_verified_at -> emailVerifiedAt
* two_factor_confirmed_at -> twoFactorConfirmedAt
* guard_name -> guardName
* media_format -> mediaFormat
* external_id -> externalId
* created_at -> createdAt
* updated_at -> updatedAt
* deleted_at -> deletedAt

## Artists to Performances

The AnimeThemes API now introduces a new way to credit artists for songs. Each artist associated with a song is represented as a performance.

With this updated schema, individual group members can now be credited directly on a song, rather than only the entire group being credited.

While you can retrieve all performances for a song through the `performances` relationship, the structure differs when viewed from the artist’s side.

Usual performances are typically available through the `performances` relationship. You may want to deduplicate the performances by the song's id, because it returns the information for each group-member relation.

If an artist is performing a song as part of a group, use the `memberPerformances` relationship.

Ideally you should use both and connect them on your code.

For more information, see the [wiki section on performances](https://animethemes.moe/wiki/guidelines/contribution#performances).

## From Group to ThemeGroup

It is easy to confuse what a group is. They can be a group of animethemes (e.g. "English Version") or a group of artists (e.g. "Aqours").

The `group` query/type does not exist. For a group of animethemes, the query is `themegroupPagination`. For a group of artists, they are included globally in the `artistPagination` query.