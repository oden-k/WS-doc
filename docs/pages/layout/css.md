# Css

## Fonts

```css
/*
 *  Fonts and typo params
 * 
*/
@font-face {
  font-family: 'Asap-semi-bold';
  src: url('Fonts/Asap-SemiBoldItalic.ttf');
}

@font-face {
  font-family: 'Roboto-medium';
  src: url('Fonts/Roboto-Medium.ttf');
}

@font-face {
  font-family: 'Roboto-regular';
  sr
```

## Variables 

``` css
/*
 *  Root variables ( css 4 spec ) 
 * 
*/
:root{

  /*colors*/
  --green : #00FF70;
  --blue :  #47B8BF;
  --grey:  #f1f1f1;
  --black :  #212121 ;
  --white : #ffffff;
  --red : #ff0000;
  --dark-grey : #808080;

  /* graditents */
  --gradient1 : '' ;

  /*shadows*/
  --shadow-cards : 0 0 16px rgba(0,0,0,1);

  /*layout*/
  --header-height : 100px;
  --message-height : 80px;
  --main-padding : 10px;
}
```

## Base elements 

```css
/*
 *  Stryling of base elements
 * 
*/
html{
  max-width: 100vw;
  font-family: 'Roboto-regular';
  font-weight: normal;
  color: var(--black);
}
body{
  max-width: 100vw;
  background : var(--white);
  padding: var(--header-height) 0  var(--message-height);
}
li{
  list-style: none;
  text-decoration:none;
}
img{
  object-fit: cover;
}
h4{
  font-size: 16px;
  font-weight: 400;
 }
h2{
   margin: 5px 0 10px;
   font-family: 'Asap-semi-bold';
   font-size: 30px;
}
```

## Custom elements 

```css
/*
 *  Special propeties, may not work in all browsers 
 * 
*/
::selection {
  background: var(--green);
}
```

## Main 

```css
/*
 *  MAIN CONTAINER
 * 
*/
.main{
  padding: 60px 20px 0 ;
  position: relative;
  min-height:  calc(100vh - var(--header-height)  - var(--message-height));
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
}
```

## Header
``` css
/*
 *  HEADER
 * 
*/
.header{
  z-index: 999;
  position: fixed;
  top:0;
  left:0;
  right:0;
  height: var(--header-height);
  background : var(--white);
  display:grid;
  grid-template-columns: 50px auto 50px;
  grid-template-areas: 'burger logo bell' ;
  align-items: center;
  justify-items: center;
  padding: 0 20px ; /*@*/
  box-shadow: 0 0 20px rgba(0,0,0,0.2)
}
.header__burger{
  position: relative;
  grid-area : burger;
  width: 50px; 
  height: 50px; 
  background-image:  url('Icones et logo/burger.svg');
  background-size: contain;
  background-position:center;
  background-repeat: no-repeat;
}
.header__logo{
  grid-area : logo;
  height: 60%;
  width: 100%;
  background-image:  url('Icones et logo/logo.svg');
  background-size: contain;
  background-position:center;
  background-repeat: no-repeat;
}
.header__bell{
  position: relative;
  grid-area : bell;
  width: 50px; 
  height: 50px; 
  background-image:  url('Icones et logo/notification.svg');
  background-size: contain;
  background-position:center;
  background-repeat: no-repeat;
}
.header__bell__count{
  position: absolute;
  background: var(--red);
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: var(--white);
  font-size: 16px;
  line-height: 25px;
  text-align:center;
  bottom: 0;
}
```

## Nav 
```css
/*
 *  NAVGATION MENU
 * 
*/
.nav{
  z-index: 9999;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--white);
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  font-size: 16px;
  overflow: hidden;
  padding: 10px 0;
}
.nav__link{
  display: block;
  height: 300px;
  width: 250px;
  height: 40px;
  padding: 0 20px ;
  line-height: 40px;
  max-width: calc(100vw - 2 * 20px);
  text-decoration:none;
  position: relative;
  color: inherit;
}
.nav__link  span{
  display: block;
  transition: all .2s ease;
  /*prevent render jump on over for smoother animation*/
  will-change: transform;
}

/*state related styling */
.nav__link:hover  span{
  transform: translateX(15px);
}
.nav__link.active{
  background: linear-gradient( 90deg,var(--blue) ,var(--green));
  color: var(--white);
}
.header__burger:hover  .nav{
  display: block;
}
```

## Message
```css
/*
 *  MESSAGE 
 * 
*/
.msg{
  width: 100%;
  display: grid;
  grid-gap: 15px;
  margin: 0 0 30px 0;
}
.msg:last-of-type{
  margin: initial;
}
.msg__avatar{
  background-image: url('Icones et logo/avatar.svg');
  background-size: contain;
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
}
.msg__content{
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
}
.msg__content > span{
  max-width: 285px;
  display: block;
  padding: 15px;
}
.msg__content > span:last-child{
  margin: 0 auto 0 0;
}

/* message from the chatbot */
.msgA{
  color: inherit;
  grid-template-columns: 60px auto;
}
.msgA .msg__content{
  grid-column:  2;
}
.msgA .msg__content > span{
  background: var(--grey);
  border-radius: 25px 25px 25px 0;
  margin: 0 auto 10px 0;
}

/* messages from the user */
.msgB{
  color: white;
  grid-template-columns: 1fr  ;
}
.msgB .msg__content > span{
  background: var(--blue);
  border-radius: 25px 25px 0 25px;
  margin: 0 0 10px auto;
}

/* done special message*/
.done{
  --size : 40px;
  height: var(--size);
  width: var(--size);
  background-image: url('Icones et logo/done.svg');
  background-size: contain;
}
```

## Widget
```css
/*
 *  WIDGET CONTAINDER
 * 
*/
.widget{
  padding: 20px 0 0 0;
  position: relative;
  grid-column: span 2;
  display: flex;
}
/*modifier*/
.card-grid{
  margin: 20px -20px 0 -20px;
  overflow-x: scroll;
  overflow-y: visible;
}
```

## Responsive 

```css
@media screen and (min-width : 376px){
  .main{
    padding: 60px 95px 0 ;
  }
  .widget{
    padding: 0 0 0 0;
    position: relative;
    grid-column: span 2;
    display: flex;
  }
  .card-grid{
    margin: 20px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    overflow-x: initial;
    overflow-y: initial;
  }
}

```

## card 
```css
/*
 *  ACTIVITIES CARDS
 * 
*/
.card{
  flex-shrink: 0;
  height: 290px;
  width: 225px;
  border-radius: 5px;
  background-color: var(--white);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.2);
  margin: 0 15px 30px 15px;
  will-change: transform;
  transition: all .3s;
  overflow:hidden;
  position: relative;
}
.button{
  font-family: 'Roboto-medium';
  position: absolute;
  background: var(--green);
  border-radius: calc(45px /2);
  border: none;
  outline: none;
  padding: 10px 24px;
  font-size: 16px;
  bottom: 15px;
  right: 15px;
  opacity: 0;
  transition: all .2s ease-in;
  will-change: opacity;
  white-space: nowrap;
}
.card__content{
  padding: 15px;
}
.card:hover{
  transform: scale(1.1);
}
.card:hover .button{
  opacity: 1;
}
```

## Ticket card 
```css
/*
 *  TICKET CARD 
 * 
*/
.ticket{
  grid-column: span 2;
  position: relative;
  width: 100%;
  height: 140px;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.2);
  margin: 0 0 30px 0;
  overflow: hidden;
  display:grid;
  grid-template-columns: 120px auto;
}
.ticket__content{
  padding: 15px;
}
.ticket__content h2{
  font-size: 25px;
}
.ticket .button{
  position: static;
  opacity: 1;
}

```

## Animated message 

``` css
/*
 *  SPECIAL MESSAGES
 * 
*/
.typing{
  display: flex;
  margin: 0;
}
.typing > span{
  height : 10px;
  width: 10px;
  border-radius: 50%;
  background: var(--dark-grey) ;
  margin: 0 5px;
  animation: scale 2s linear 0s infinite forwards;
  will-change: scale;
  transform :  scale(0);
}
.typing > span:nth-child(1){
  animation-delay: 0s;
}
.typing > span:nth-child(2){
  animation-delay: 0.66s;
}
.typing > span:nth-child(3){
  animation-delay: 1.32s;
}

/* typing buble animation */
@keyframes scale{
  0%{
    transform :  scale(0);
  }
  50%{
    transform :  scale(1);
  }
  100%{
    transform :  scale(0);
  }
}
```


## input

``` css

/*
 *  MESSAGE SECTION 
 * 
*/
.message{
  z-index: 999;
  position:fixed;
  bottom: 0;
  left:0;
  right:0;
  height: var(--message-height);
  display: flex;
  align-items: center;
 
  padding: 16px;
  background-color: var(--white);
  box-shadow: 0 0 20px rgba(0,0,0,0.2)
}
.message__input{
  margin: 0 10px 0 0;
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 16px;
  padding: 10px;
  background: var(--grey);
}
.message__input:focus{
  border: 2px solid var(--green);
}
.message__send{
  width: 50px; 
  height: 50px ;
  display: block;
  content: '';
  background-color: transparent;
  background-image:  url('Icones et logo/send.svg');
  background-size: contain;
  background-position:center;
  background-repeat: no-repeat;
  border: none;
  -webkit-tap-highlight-color : none;
  flex-grow:0;
  outline: none;
}
```