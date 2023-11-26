<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\HappeningController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome');
});

Route::get('/story', function () {
    return Inertia::render('Story');
});
Route::get('/offer/{type}',[HappeningController::class, 'index']);
Route::get('/workshop', function () {
    return Inertia::render('Offer',['titleSpan'=>'Ofertę warsztatową']);
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/offer/{type}/happening/{happening}', [HappeningController::class, 'show']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
