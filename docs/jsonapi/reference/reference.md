---
title: API Reference
---

# API Reference

## Content

---

Content API resources comprise the repository of anime opening and ending themes and their contextual relations.

### Resources

**[Anime](/content/anime/)**

An anime API resource represents a production with at least one opening or ending sequence.

**[Anime Image](/content/animeimage/)**

An anime image API resource represents the association between an anime and an image.

**[Anime Resource](/content/animeresource/)**

An anime resource API resource represents the association between an anime and an external resource.

**[Anime Series](/content/animeseries/)**

An anime series API resource represents the association between an anime and a series.

**[Anime Studio](/content/animestudio/)**

An anime studio API resource represents the association between an anime and a studio.

**[Anime Synonym](/content/animesynonym/)**

An anime synonym API resource represents an alternate title or common abbreviation for an anime.

**[Anime Theme](/content/animetheme/)**

An anime theme API resource represents an OP or ED sequence for an anime.

**[Anime Theme Entry](/content/animethemeentry/)**

An anime theme entry API resource represents a version of an anime theme.

**[Anime Theme Entry Video](/content/animethemeentryvideo/)**

An anime theme entry video API resource represents the association between an anime theme entry and a video.

**[Artist](/content/artist/)**

An artist API resource represents a musical performer of anime sequences.

**[Artist Image](/content/artistimage/)**

An artist image API resource represents the association between an artist and an image.

**[Artist Member](/content/artistmember/)**

An artist member API resource represents the association of an artist and a group/unit.

**[Artist Resource](/content/artistresource/)**

An artist resource API resource represents the association between an artist and an external resource.

**[Artist Song](/content/artistsong/)**

An artist song API resource represents the association between an artist and a song.

**[Audio](/content/audio/)**

An audio API resource represents the audio track of a video.

**[Group](/content/group/)**

A group API resource represents the group that accompanies an AnimeTheme.

**[Image](/content/image/)**

An image API resource represents a visual component for another resource such as an anime or artist.

**[Resource](/content/resource/)**

An external API resource represents a site with supplementary information for another resource such as an anime or artist.

**[Series](/content/series/)**

A series API resource represents a collection of related anime.

**[Song](/content/song/)**

A song API resource represents the composition that accompanies an AnimeTheme.

**[Song Resource](/content/songresource/)**

An song resource API resource represents the association between an song and an external resource.

**[Studio](/content/studio/)**

A studio API resource represents a company that produces anime.

**[Studio Image](/content/studioimage/)**

A studio image API resource represents the association between a studio and an image.

**[Studio Resource](/content/studioresource/)**

A studio resource API resource represents the association between a studio and an external resource.

**[Video](/content/video/)**

A video API resource represents a WebM of an anime theme.

**[Video Script](/content/videoscript/)**

A video script API resource represents an encoding script used to produce a video.

## Search

---

**[Global Search Endpoint](/search/)**

The global search endpoint returns a listing of resources that match a given search term.

## Admin

---

Admin API resources pertain to the administration of the site by the moderation team.

### Resources

**[Announcement](/admin/announcement/)**

An announcement API resource represents a site-wide message to be broadcasted on the homepage.

**[Dump](/admin/dump/)**

A dump API resource represents a database dump of selected tables at a given point in time.

**[Feature](/admin/feature/)**

A feature API resource represents a feature flag that enable/disable site functionalities.

**[Featured Theme](/admin/featuredtheme/)**

A featured theme API resource represents a video to be featured on the homepage of the site for a specified amount of time.

## Auth

---

Auth API resources pertain to the authorization of actions on the site.

### Resources

**[Me](/auth/user/me/)**

The "Me" namespace is a collection of endpoints that pertain to the currently authenticated user.

**[Permission](/auth/permission/)**

A permission API resource represents an assignable label for users and roles that authorizes a particular action in AnimeThemes.

**[Role](/auth/role/)**

A role API resource represents an assignable label for users that provides a configured group of permissions.

**[User](/auth/user/)**

A user API resource represents an AnimeThemes account.

## Document

---

Document API resources pertain to site documentation.

### Resources

**[Page](/document/page/)**

A page API resource represents a static markdown page used for guides and other documentation.

## List

---

List API resources pertain to user playlists.

### Resources

**[Playlist](/list/playlist/)**

A playlist API resource represents a list of ordered tracks intended for continuous playback.

**[Playlist Image](/list/playlistimage/)**

A playlist image API resource represents the association between a playlist and an image.

**[Playlist Track](/list/playlist/track/)**

A playlist track API resource represents an entry in a playlist.