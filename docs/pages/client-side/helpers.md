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