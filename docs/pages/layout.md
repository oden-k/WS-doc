# Client side

## Base
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta name="charset" content="utf8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="Icones et logo/favicon.png">

    <title>Turisto</title>
  </head>
  <body>
  
    //header here
  
     <main class="main">
     
      //messages here
     
     </main>
     
    //inputs here
     
  </body>
</html>
```
## Header

**emmet**
```
header.header>div.header__burger>nav.nav>ul.nav__links>li.nav__link*5>span
```


```html
 <header class="header gpu_layer">

      
      <!--burger icon and nav-->
      <div class="header__burger" >

        <!--navigation-->
        <nav class="nav gpu_layer">
          <ul class="nav__links">
            <a href="#" class="nav__link">
              <span >Accueil</span>
            </a>
            <a href="#" class="nav__link">
              <span >Carte</span>
            </a>
            <a href="#" class="nav__link">
              <span >Mes tickets</span>
            </a>
            <a href="#" class="nav__link active">
              <span >Chat bot</span>
            </a>
            <a href="#" class="nav__link">
              <span >Profil</span>
            </a>
          </ul>
        </nav>

        
      </div>

      

      <!-- brand logo -->
      <div class="header__logo"></div>

      <!-- bell icon -->
      <div class="header__bell">
        <span class="header__bell__count">2</span>
      </div>

    </header>
```

## Messages A

**emmet**
```
section.msg.msgA>.msg__avatar/.msg__content>span*2
```

```html
<section class="msg msgA">
    <div class="msg__avatar"></div>

    <div class="msg__content">
      <span> Hello, bienvenu a Cean!</span>
      <span> Tu vet connaitre les mailleures activités et visites pour tes vacances ? Quelle dates t'interessent ?</span>
    </div>

</section>
```

## Message B

**emmet**
```
section.msg.msgB>.msg__content>span
```

``` html
<section class="msg msgB">
  <div class="msg__content">
      <span>Du 15/05 au 12/06</span>
  </div>
</section>
```

## Card grid 

**emmet**
```
.widget.card-grid>.card*6>img/.card__content>h2+h4^button.button
```

```html
<div class="widget card-grid">
            
    <!-- card  -->
    <div class="card ">
      <img class="card__img" src="images/abbaye.jpg" width="100%" height="100%" alt="Abbaye aux Hommes">
      <div class="card__content">
        <h4>Visite</h4>
        <h2>Abbaye aux Hommes</h2>
      </div>
      <button class="button">
        $5 - réserver
      </button>
    </div>
      
      
 </div>
```