<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    protected $fillable = [
        'bill_id',
        'cutomer_name',
        'customer_tel',
    ];
}
