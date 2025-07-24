---
title: Filtering
---

# Filtering

---

Most queries provide filtering arguments using the AND operator. Filtering arguments are built using `{fields}_{filter}`.

## All Filters

* Eq: `name` (without the filter argument)
* Like: `name_like`
* In: `id_in`
* Not in: `id_not_in`
* Greater: `id_greater`
* Lesser: `id_lesser`

Query example:
```graphql
query {
    animes(name_like: "%monogatari%") {
        data {
            name
        }
    }
}
```

## Available Filters for the fields

### String Fields

* Eq
* Like

### Int Fields

* Eq
* In
* Not in
* Greater
* Lesser

### Float Fields

* Eq
* In
* Not in
* Lesser
* Greater

### Boolean Fields

* Eq

### Enum Fields

* Eq
* In
* Not in

### DateTimeTz Fields

* Eq
* Greater
* Lesser


## Nested Filtering

Filtering in relationships is applied **ONLY** on the relationship and it doesn't affect the previous root.

```graphql
query {
    animes {
        data {
            name
            animethemes(type: OP) {
                type
                sequence
            }
        }
    }
}
```