<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/apps', 'HomeController@index')->name('home');

//vue js routing
//this emits popper.js error
//Route::get('{path}',"HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );

