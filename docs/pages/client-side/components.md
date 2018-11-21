# Components

```
// list of all the component files

v-slide
v-podcast

v-episode
v-episode-small

v-player
v-playlist

v-search
```


### Asyc data : 

Don't forget that we are playing with async data fetched from a server, any non fetched data shoudlnt' be used before it's actuely on the browser. The event **ready** is meant to be firered when all the minimal needed data is fecthed.


### Time : 

This competition allow very few time for this exercise, so be dure to do it the most efficiently as possible. Reuse function and avoid making unused components. 

A centralised state can help with that by alowing fewer fetch requests.

Event bus, although they are a poor solution on production aplication are here a good solution to speed up the workflow.

Strict naming can help too.

## v-player

Dont' forget the events  **timeupdate** and **loadeddata**

Dont' forget the properties  **currentTime** and  **duration** of the player element


```html
<audio controls style="display:none" ref="player" preload="auto" >
  <source :src="src" type="audio/mpeg" ref="source">
</audio>
```

```js
```