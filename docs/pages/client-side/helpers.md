# List of helper functions


### Convert date to human format

```js

const toFrenchFormat = () => {
  const date = new Date(date)

  const options = {
    year : 'numeric',
    month : 'short',
    day: 'numeric'
  }
  return date.toLocaleDateString('fr-FR',options)
}
```

### Convert seconds to template

```js
const secondsToTime = sc => {

  let sec_num = parseInt(sc, 10); 
  
  let hours   = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);
  
  /* optional */
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  
  return `${hours}H ${minutes}M $`
}
```
### Find and delete in an array

```js 
const findAndDelete = (array,val) => {
	for( var i = 0; i < array.length; i++){ 
		if ( array[i] === val) {
			array.splice(i, 1); 
		}
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