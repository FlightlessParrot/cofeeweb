<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Happening extends Model
{
    use HasFactory;
    protected $fillable=['type',
    'title',
    'description',
    'body',
    'date',
    'time',
];
}
