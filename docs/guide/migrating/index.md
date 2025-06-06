---
title: Migrating from REST API
---

# Migrating from REST API

---

While writing the GraphQL API, it was decided to make some changes to follow the [best practices recommended by GraphQL](https://graphql.org/learn/best-practices/).

## Field names

Fields in the REST API are snake_case, but now it is camelCase instead.

Affected Fields:

* start_at -> startAt
* end_at -> endAt
* email_verified_at -> emailVerifiedAt
* two_factor_confirmed_at -> twoFactorConfirmedAt
* guard_name -> guardName
* media_format -> mediaFormat
* views_count -> viewsCount
* external_id -> externalId
* created_at -> createdAt
* updated_at -> updatedAt
* deleted_at -> deletedAt

## From Group to ThemeGroup

It is easy to confuse what a group is. They can be a group of animethemes (e.g. "English Version") or a group of artists (e.g. "Aqours").

The `group` query/type does not exist. For a group of animethemes, the query is `themegroups`. For a group of artists, they are included globally in the `artists` query.