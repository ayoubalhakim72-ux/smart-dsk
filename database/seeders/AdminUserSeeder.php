<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            'email' => 'admin@smartdesk.com',
            'firstname' => 'Admin',
            'username' => 'admin',
            'password' => Hash::make('123456'),
            'roleid' => 1,
            'creationdate' => now(),
            'isbanned' => false,
            'banreason' => null,
        ]);
    }
}