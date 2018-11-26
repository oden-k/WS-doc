# Client Side Module

For the seek of performance training is very important, so it is a must to follow the steps described below in the right order and to try to do it fast.

Most of the complicated functions actually lives in the main.js file.  


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
## 1 - Constants and helpers for api

### token 
``1min``

```js
/*
 * Constants
 * 
*/
const baseUrl = "http://api.wabee.fr"

/*
 * Helpers
 * 
*/
const getToken = () => localStorage.getItem('token')
const setToken = token => localStorage.setItem('token',token)
const apiUrl = url => `${baseUrl}${url}`
const makeSlideshow = (el) => new Slideshow(el)

```

### api 
``4min``

```js
/*
 * Api helpers
 * 
*/
const api = {
	get : (url,data) => {
		return $.ajax(apiUrl(url),{
			method : 'GET',
			headers : {
				"X-auth-token" : getToken()
			},
			data
		})
	},
	post : (url,data) => {
		return $.ajax(apiUrl(url),{
			method : 'POST',
			headers : {
				"X-auth-token" : getToken()
			},
			data : {
				datas : JSON.stringify(data)
			}
		})
	}
}
```


## 2 - Session interface 

The session interface is meant to bridge the data from the store to the token session on the server. It makes use of two functions already declared :  
`postLikes` & `findAndDelete`

```js
/*
 * Session interface
 * 
*/
const $Session = {
	likePodcast : (podcast) => {
		store.session.podcasts.includes(podcast.id)
			?   findAndDelete(	store.session.podcasts, podcast.id)
			: 	store.session.podcasts.push(podcast.id)
		postData()
	},
	likeEpisode : (episode) => {
		store.session.episodes.includes(episode.id)
			?   findAndDelete(	store.session.episodes, episode.id)
			: 	store.session.episodes.push(episode.id)
		postData()
	},
	getLikesOfPodcastAndEpisodes : podcast => {
		let likesEpisodes = podcast.episodes.reduce((a,c)=> a += $Session.getLikesOfEpisode(c),0)
		let likes = store.session.podcasts.includes(podcast.id) ? 1 : 0
		return  likes +  likesEpisodes
	},
	getLikesOfPodcast : podcast => {
		return   store.session.podcasts.includes(podcast.id) ? 1 : 0
	},
	getLikesOfEpisode : episode => {
		return store.session.episodes.includes(episode.id) ? 1 : 0
	}
}


const postData = () => {
	api.post('/sessions/store',store.session)
}
```


## 3 - Store 
```js
/*
 * Store
 * 
*/
const store  = {
	audios : [],
	podcasts : [],
	session : {
		episodes : [],
		podcasts : []
	},

	/*episode section*/
	episodeSection_visible : false,
	episodeSection_episodes : [],
	episodeSection_podcast : null,
	
	/*playlist*/
	playlist_podcast : '',
	playlist_episodes : [],
	playlist_current_id : 1,
	playlist_visible : true,
	playlist_podcast_playing : '',
	playlist_episode_playing : ''
}
```



## 4 - Getters 
```js
/*
 * Getters
 * 
*/
const getLikes = obj => Object.values(obj.likes).reduce((a,c)=> a + c , 0)
const getAudio = episode => store.audios.find( el => el.id === episode.audio_id)
const getDuration = episode => getAudio(episode).duration

const getEpisodeInfos = episode => {
	return {
		likes :  getLikes(episode),
		duration : secondsToTime(getAudio(episode).duration,'HH:MM'),
		images : getAudio(episode).images,
		audio : getAudio(episode).sources.mp3
	}
}

const getPodcastInfos = podcast =>{
	let likes = podcast.episodes.reduce((a,c)=> a += getLikes(c) ,0)
	let duration =  podcast.episodes.reduce((a,c) => a += getDuration(c),0)

	return {
		likes : getLikes(podcast) + likes,
		duration : secondsToTime(duration,'HH:MM'),
		created_at : formatDate(podcast.created_at),
		href : podcast.url,
		firstHref : getAudio( podcast.episodes.find(el => el.position === 1)).sources.mp3
	}
}
```





##  5 -  Main Vue App

### Vue
``10min``
```js 
*
 * Main vue
 * 
*/
const App = new Vue({
	el : '#App',
	data : {
		store
	},
	methods : {
		getPodcasts(){
			api.get('/podcasts')
				.then(res => this.store.podcasts = res )
				.then( () => {
					eventBus.$emit('makeSlideshow')
					this.getAudios()
				})
		},
		getAudios(){
			api.get('/audios')
				.then(res => this.store.audios = res )
				.then( () => {
					this.getSession()
				})
		},
		getSession(){
			api.get('/sessions/get')
				.then(res => {
					if(res.datas.length < 1){
						postData()
					}else{
						this.store.session = JSON.parse(res.datas)
					}
			})
			eventBus.$emit('ready')
		}
	},
	created(){
		if(!getToken()){
			api.get('/sessions/create')
				.then(res => setToken(res.token))
				.then( () => {
					this.getPodcasts()
				})
		}else{
			this.getPodcasts()
		}
	}
})
```


### Event bus
``30sec``
```js 
/*
 * EveentBus
 * 
*/
const eventBus = new Vue()

```


