---
title: JSON:API
---

# JSON:API

---

The AnimeThemes API selectively implements the [**JSON:API Specification**](https://jsonapi.org/format/).

Here we will provide an overview of where the AnimeThemes API adheres to or deviates from the specification.

## General Strategies

The AnimeThemes API shall favor silent failures to raising exceptions.

The AnimeThemes API shall allow case-insensitive matching.

## Content Negotiation

The AnimeThemes API does **NOT** require a `Content-Type` or `Accept` header.

AnimeThemes filters API requests and sets the `Accept` header on behalf of the client.

## Document Structure

### Top Level

The AnimeThemes API specifies a custom `data` wrap for top-level members.

### Resource Objects

The AnimeThemes API Resource Objects do **NOT** contain top-level members `id` and `type`.

The AnimeThemes API Resource Object attributes are included as top-level members and are **NOT** contained in an `attributes` object.

The AnimeThemes API Resource Objects relationships are included as nested members and are **NOT** contained in an `relationships` object.

The AnimeThemes API Resource Object collections shall contain `links` and `meta` members for pagination strategies.

## Fetching Data

### Fetching Resources & Relationships

The AnimeThemes API does **NOT** support fetching resources or relationships.

### Inclusion of Related Resources

The AnimeThemes API supports inclusion of related resources for every endpoint.

For endpoints that produce responses of mixed typed top-level members, inclusion of related resources are scoped by type `include[type]`.

If inclusion of related resources is not specified, the AnimeThemes API shall **NOT** include any related resources.

### Sparse Fieldsets

The AnimeThemes API supports sparse fieldsets for every endpoint.

If the client does not specify the set of fields for a given resource type, the AnimeThemes API shall send all fields.

### Sorting

The AnimeThemes API supports sorting for every endpoint that returns a collection of resources.

### Pagination

The AnimeThemes API supports an offset pagination strategy for every endpoint that returns a collection of resources.

For these endpoints, the AnimeThemes API supports the `page[number]` and `page[size]` query parameters.

For endpoints that produce responses of mixed typed top-level members, the AnimeThemes.moe supports a limit pagination strategy.

For these endpoints, the AnimeThemes API support the `limit` query parameter.

### Filtering

The AnimeThemes API supports filtering for every endpoint.

**Strategy**

The AnimeThemes API supports the [**recommended**](https://jsonapi.org/recommendations/#filtering) base strategy for filtering.

The AnimeThemes API extended syntax is `filter[scope][field][comparison operator][logical operator]=value(s)`.

**Scope**

The AnimeThemes API supports scoping filters by resource type.

If a scope is not provided, the filter shall match all types.

**Field**

The AnimeThemes API supports filtering against resource attributes.

**Comparison Operator**

The AnimeThemes API supports the following comparison operators for filter conditions:

* EQ
* NE
* LT
* GT
* LTE
* GTE

If a comparison operator is not provided, the filter shall use the EQ operator.

**Logical Operators**

The AnimeThemes API supports the following logical operators:

* AND
* OR

If a logical operator is not provided, the filter shall use the AND operator.

The AnimeThemes API supports the following logical operator for multi-value filter conditions:

* NOT

If the multi-value logical operator is not specified, the filter shall exclude the multi-value logical operator.