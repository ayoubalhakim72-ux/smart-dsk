<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';

    public $timestamps = false;

    protected $fillable = [
        'email',
        'firstname',
        'username',
        'password',
        'roleid',
        'creationdate',
        'isbanned',
        'banreason'
    ];

    public function role()
    {
        return $this->belongsTo(Role::class, 'roleid');
    }
}