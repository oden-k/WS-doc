# Laravel 


## Les liens utiles 
- [laravel par la pratique](https://laravel.sillo.org/laravel-5/) 
## Php Artisan comandes

```bash
laravel new {app name}  //create a new laravel app
```



```
$ php artisan make:model Book -m  //artisan make a model and the corresponding migration
```

If there is an error when running the migrations just add the folowing lines the the app service provider :
```
use Illuminate\Support\Facades\Schema;

public function boot()
{
    Schema::defaultStringLength(191);
}
```

## Goal :   
Un clone de medium avec des articles, des claps, des commentaires et des utilisateurs.

1. Register new user 
2. Delete user with it's token
3. update user info
4. protect a simple route with the token





## Todo :

- Api 
- Retourner une vue
- Formulaires
- Authentification token && session
- Custom midlewares
- Auth api
- schema base de donnée
- eloquent mysql
- seeding
- relations 
- collections
- patterns
- mise en place du projet
- déploiement
- connection au front 
- php en mode objet