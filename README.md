# jquery-http-auth

#### Author: http://www.yubutsan.com.ua/

A custom application on how to setup an authorization page using jQuery, hosted [REST-API](https://reqres.in/) for AJAX requests, HTTP authentication (validation input fields with disabled button form), using Token in the sessionStorage, preloader and pleasent material design for all UI components (something of them you can see below).

<img src="https://github.com/0neLife/jquery-http-auth/blob/master/app/img/Collage-UI-components.png" width="100%">  

Run
-----------
```

$ npm install --save-dev gulp

$ npm install

$ gulp
```


Requirements
-----------
* [NodeJS](http://nodejs.org/) v8.11.3 or latest installed.
* [npm](https://www.npmjs.com/) v5.6.0 or latest installed.
* [gulpJS](https://gulpjs.com/) installed.

Dependencies list
-----------
```
"gulp"
"browser-sync"
"gulp-autoprefixer"
"gulp-imagemin"
"gulp-minify-css"
"gulp-rename"
"gulp-sass"
"gulp-uglify"
"imagemin-mozjpeg"
"node-bourbon"
```

Basic authentication
-----------
```
{
  "email":    "peter@klaven",
  "password": "citySlicka098"
}
```

Technical implementation API
-----------
```
Login POST
https://reqres.in/api/login/(with Basic authentication)
```
