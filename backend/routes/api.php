<?php

use Illuminate\Http\Request;
use Illuminate\Routing\RouteBinding;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ItemController;
use App\Http\Controllers\StoreController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Items routes
Route::resource('items', ItemController::class);
Route::post('items/{store_id}/store', [ItemController::class, 'store']);


// Store Routes
Route::resource('stores', StoreController::class);



//User Routes




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
