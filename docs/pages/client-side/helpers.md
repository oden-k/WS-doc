# List of helper functions


### Convert date to human format

```js
const formatDate = dts => {
	const date = new Date(dts)
	const params  = {
		year : 'numeric',
		month : 'short',
		day : 'numeric'
	}
	return date.toLocaleDateString('fr-FR',params)
}
```

### Convert seconds to template

```js
const secondsToTime = (sc,format) => {
	let sc_num = parseInt(sc)

	let hours = Math.floor(sc_num /3600)
	let minutes = Math.floor(  (sc_num - hours*3600 ) /60)
	let seconds = Math.floor( sc_num - ( hours*3600 ) - (minutes*60))

	hours =  hours < 10 ? '0'+hours : hours
	minutes =  minutes < 10 ? '0'+ minutes : minutes
	seconds =  seconds < 10 ? '0'+ seconds : seconds

	switch(format){
		case 'HH:MM':
			return `${hours}H ${minutes}M`
			break;
		case 'MMSS':
			return `${minutes}:${seconds}`
			break;
	}
}
```
### Find and delete in an array

```js 
const findAndDelete = (arr,item) => {
	for(let i = 0; i< arr.length;i++){
		arr[i] === item
			? arr.splice(i,1)
			: null
	}
}
```


### Get informations of a podcast 

```js 
/*
 * @return totalDuration fromated
 * @return totalLikes 
 * @return createdAt fromated
 * @return firstEpisode mp3 href
*/
```

### Get informations of an episode

```js 
/*
 * @return duration fromated
 * @return likes 
 * @return createdAt fromated
 * @return mp3 href
*/
```