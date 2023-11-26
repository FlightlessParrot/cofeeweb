<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;

use App\Http\Controllers\Auth\NewPasswordController;

use App\Http\Controllers\HappeningController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::middleware('guest')->group(function () {

    // Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('/login', function () {
        return Inertia::render('Login');
    });

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    // Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
    //             ->name('password.request');

    // Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    //             ->name('password.email');

    // Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    //             ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    // Route::get('verify-email', EmailVerificationPromptController::class)
    //             ->name('verification.notice');

    // Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    //             ->middleware(['signed', 'throttle:6,1'])
    //             ->name('verification.verify');

    // Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    //             ->middleware('throttle:6,1')
    //             ->name('verification.send');

    // Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    // Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
    Route::get('/admin', [HappeningController::class,'create']);
    Route::post('/happening',[HappeningController::class,'store']);
    Route::post('/happening/{happening}/upload',[HappeningController::class,'upload']);
    Route::delete('/happening/{happening}',[HappeningController::class,'destroy']);
});
