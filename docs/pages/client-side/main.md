# Client Side Module

For the seek of perfomance trainining is verry important, so it is a must to folow the steps described below in the right order and to try to do it fast.

Most of the complicated functions acuelly lives in the main.js file.  


## Folder structure

```
src -- > /js
          |-- /components
          |
          |-- /vendors
          |
          |-- main.js
          |
            
```
## 1 -  Constants and helpers for api

### token 
``1min``

```js
const apiURL = 'http://api.wabee.fr'

const getRouteUrl =  (url) =>`${baseUrl}${url}`
const getToken = () => localStorage.getItem('token')
const setToken = (token) => localStorage.setItem('token',token)
```

### api 
``4min``

```js
const api = {
	get : (url,data) => {
		return $.ajax(getRouteUrl(url),{
			method : 'GET',
			headers : {
				'X-auth-token' :  getToken() 
			},
			data : data || ''
		})
	},
	post : (url,data) => {
		return $.ajax(getRouteUrl(url),{
			method : 'Post',
			headers : {
				'X-auth-token' :  getToken()
			},
			data : {
     			datas : JSON.stringify(data)
     		}
		})
	},
}
```

##  2-  Main Vue App

### Vue
``10min``
```js 

```


### Store
``4min``
```js 

```

### Event bus
``30sec``
```js 
const eventBus =  new Vue()
```


## Session Interface 

The session interface is meant to bridge the data from the store to the token session on the server. It makes use of two functions already declared :  
`postLikes` & `findAndDelete`

```js 
const sessionInterface = {
	likePodcast : (id) => {
		const likedPodcasts = store.session.podcasts

		likedPodcasts.includes(id) 
    		? findAndDelete(likedPodcasts,id) 
    		: likedPodcasts.push(id)

		postLikes()
	},
	likeEpisode : (id) => {
		const likedEpisode = store.session.episodes

		likedEpisode.includes(id) 
    		? findAndDelete(likedEpisode,id) 
    		: likedEpisode.push(id)

		postLikes()
	},
	getPodcastLike: (podcast) => {
		const like = store.session.podcasts.includes(podcast.id) ? 1 : 0
		const likesEpisodes = podcast.episodes.reduce((acc,curr) =>  acc += sessionInterface.getEpisodeLike(curr),0)
		return like + likesEpisodes
	},
	getEpisodeLike: (episode) => {
		return store.session.episodes.includes(episode.id) ? 1 : 0
	}
}
```