# Wordpress 


## Links 
[cheat sheet](https://cdn.rawgit.com/hostinger/banners/b2416e91/tutorials/pdf/Wordpress-Cheat-Sheet-V-1.pdf)

## Configure
### database






## Theme
### fichier de theme
```

```
### Files
```

```



## Header
```php
bloginfo('name');  //<-- title of the site
bloginfo('description');
bloginfo('version');
bloginfo('template_url');
bloginfo('rss2_url'); 


wp_title(); //<-- title of the page

get_stylesheet_directory_uri(); //<-- The style.css file’s location

get_site_url();
```
## Template
```php
the_content();  //<-- content of the posts


```
## Loop
```php
//Shows posts if posts are available
if(have_posts()): //<-- return true if thereare posts
while(have_posts()): the_post(); 

  the_title();
  
  the_content();
  
  the_permalink();
  
  the_category();
  
  the_author();
  
  the_ID();
  
  <php else; ?>
endwhile;
```

## Includes
```php
get_header(); //header.php
get_sidebar(); //sidebar.php
get_footer(); //footer.php
comments_template();//  Load specific template for comments.
```


## Listes 
```php
wp_list_pages();
wp_list_cats();
wp_get_archives(); // list of the arhives of the site
```









## Todo : 
- layout classique
- liste d'options
- déploiement
- config
- plusieurs comptes utilisateurs ( admin et non admin )