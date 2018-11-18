# Mini tuto laravel

[auth built in token](https://medium.com/@danielalvidrez/how-to-use-laravels-built-in-token-auth-6b6f6c26d059)


## Base config
Lors de la configuration de base d'une application Laravel il est nécessaire de renseigner plusierus points dans le fichier **.env** situé à la racine du dossier. 

- Le nom de l'application
- Le nom de la base de données
- Le port de la basse de donnée
- le mdp de la base de donné
- le login de la base de donné
- l'adresse ( URL ) de la base de donnée


## Les routes :

```php
Route::get('/')

Route::get('/route/{param1}-{param2}',function($param1,$param2){
   return '';
});

Route::get('/route',[
    'as' => 'name of the route',
    function(){
        return '';
    }
]);

Route::group([
         'prefix' => 'prefix',
         'middleware' => 'name of the moddleware'
    ],function(){
    
    Route::get('delete',function(){
        return '';
    });
});
```


## Les controllers
Les controlleurs permettent de délpacer la logique des routes dans des fichiers séparés afin de garder un code claire et modulaire.  

```php

//to use a controller on a specific route
route::get('about',[
    'as' => 'about',
    'uses' => 'PageController@about'
]);
```

## Les migrations 
Les migrations permettent tout simplement de créer ou de modifier des tables dans la base de donnée.  Cela est particuliérement pratique lorsque l'on travaille avec du versioning en équipe et que le schema de la base de donnée n'est pas encore fixée. 

**Faire attention il existe des normes de nomages :**   
une migration se nomera :  `create_NomDeLaTable_table`

```php
public function up()
{
    Schema::create('password_resets', function (Blueprint $table) {
        $table->string('email')->index();
        $table->string('token');
        $table->timestamp('created_at')->nullable();
    });
}
```
```php
$table->string();
$table->string()->index();
$table->timestamp();
$table->longText();
$table->increments();
```

La fonction down permet d'effectuer des actions lors du rollback ( suprimer la table )
```php
public function down()
{
    Schema::dropIfExists('password_resets');
}
```


## Les modéles

```php

```




## API


