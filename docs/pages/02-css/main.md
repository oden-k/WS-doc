# Css
  
  
## Commentaires
```css
/* commentaire inline */

body {
  font-size: 62.5%  /* 1em = 10px */
}

/**
  ====== Un bloc avec un titre
**/

/**
  END
**/
```

## Sélecteurs 
## liste
```css
.el1,
.el2,
.el3,
.el4{
  /* style */
}
```
### Voisins
```css
.el + .el2{
  /* style */
}
```
### Atributs
```css
el[atribute="atribute-value"]

input[type="text"]{
  /* style */
}
```

## Specific syntax 
### Gradients
### Box-shadow
### Animation


## Shapes  with Css
### Trianges
### Tircles
### Shadows



## CSS-variables 
Les variables css sont interprétés lors de l'écécution de la page.  Elles peuvent étres utiles pour rendre le code plus modulaire.
```css
:root{
  --red : rgb(255,0,0);
  --blue : rgb(0,0,255);
  --green : rgb(0,255,0);
  --grey-medium : rgb(120,120,120);
  --a : 1px;
  --b : 2rem;
}

.header{
  --grey : var(--grey-medium);
  background: var(--red);
  color: var(--grey);
}

.body{
  --width : calc(var(--a)+var(--b))
  width : var(--width)
}

```

## Conventions de Nomage
Pour le nomage des classes et comme il ne sera pas possible d'utiliser de prééprocesseur j'utiliserais donc en partie la syntaxe BEM



## Some webkit prefixes 
Quelques prefix webkit juste au cas ou





## todo : 

- template d'éléments
- style de boutons
- style de dropdowns
- animations 
- sélécteurs
- clip paths






















