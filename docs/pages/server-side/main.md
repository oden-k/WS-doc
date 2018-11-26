# Server Side Module

For the seek of performance training is very important, so it is a must to follow the steps described below in the right order and to try to do it fast.

## Configure environment 

The **.env** file situated at the root fo the Laravel folder must be filled with the app name and the DB access informations.

## Fix DB errors

In the App/Providers/AppServiceProvider you should make the default string length equal to 191

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

```

## Auth 

### Begin by the scaffolding of the database.
Use a seeder to register a new user to the base. If there is a missing field update the model. Same if you encounter mass assignment issues.

```php
<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'first_name' => '',
            'last_name' => '',
            'email' => 'bossDu14@gmail.com',
            'remember_token' => str_random(10),
            'password' => Hash::make('cestMoiLeBoss')
        ]);
    }
}

```

### Then create a simple middleware.
```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AuthCustom
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check()){
            return $next($request);
        }else{
            return redirect('/login');
        }

    }
}
```

### Register the middleware
Once created you can register a new middleware in the kernel

```php
/**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.custom' =>  \App\Http\Middleware\AuthCustom::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
    ];
```

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Auth;

class authController extends Controller
{
    public function index(){
        if(Auth::user()){
            return redirect('admin/accueil');
        }
        return view('pages/login');
    }
    public function login(Request $request){

        $this->validate($request,[
            'email' => 'required|email',
            'password' => 'required|min:3|alphaNum'
        ]);

        $user_data = array(
            'email' => $request->get('email'),
            'password' => $request->get('password')
        );

        if(Auth::attempt($user_data)){
            return redirect('admin/accueil');
        }else{
            return back()->with('error','invalid password or username');
        }
    }

    public function logout(){
        Auth::logout();
        return redirect('/');
    }
}
```

Once the user has been authenticated he can have access to the pages protected by the middleware auth.


## The controllers :   

Once the auth is completed the rest is just bootstrapping vues with logic and a database connection.  Make use of **Eloquent** the ORM of Laravel at your advantage.

### Make the models
Make the models of your objects, it's quite simple : 


### Build the database structure with migrations 

``php artisan make:model Name -ms``

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('desc');
            $table->integer('max_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}

```

### Relations 

Relations simples 

```php
class Post extends Model{

  public function category(){
      return $this->belongsTo('App\Category');
  }

}
```

```php
class Category extends Model{

    public function posts(){
        return $this->hasMany('App\Post');
    }

}
```

```php
$post = App\Post::find(1);
$category = App\Catgory::find(1);

$post->category; //return the category
$post->category(); //return the relation

$post->category()->associate($category)
```



### Example of a global controller

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class mainController extends Controller
{
    public function buy(Request $request){

        $ticket = array(
            'id' => $request->get('id'),
            'count' => $request->get('count'),
        );

        if( $ticket['count'] == 0){
            Session::flash('error', "Veuillez selectioner un nomvre non nul de tickets");
            return back();
        }else{
            Session::push('tickets', $ticket);
            return redirect('/panier');
        }

    }


    public function update(Request $request){
        $id = $request->get('id');
        $count = $request->get('count');


        $data = Session::get('tickets');
        $data[$id]['count'] = $count ;


        Session::put('tickets', $data);

        return redirect('/panier');

    }

    public function delete(Request $request){
        $id = $request->get('id');

        $data = Session::get('tickets');
        unset($data[$id]);
        Session::put('tickets', $data);
        return redirect('/panier');
    }

}

```


### Example of a template


Don't forget the  csrf security fields : 

```php
@extends('../layout/base')


@section('content')
    <h1>Login</h1>
    <p>
        @if(count($errors) > 0)
            <div>
                <span>Allert</span>
                <ul>
                    @foreach ($errors->all() as $error)
                    <li>
                        {{$error}}
                    </li>
                    @endforeach
                </ul>
            </div>
        @endif
    </p>
    <p>
        @if($message = Session::get('error'))
            <strong>
                {{$message}}
            </strong>
        @endif
    </p>
    <form action="/login" method="POST" class="form w-50  ">
    
        {{ csrf_field() }}
        
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" id="password" placeholder="Password">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
@endsection
```




