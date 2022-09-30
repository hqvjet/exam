<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Ebook extends Model
{
    use HasFactory;

    function insertEbook($name, $year, $price) {

        DB::insert('insert into ebook(name, year, price) values (?, ?, ?)', [$name, $year, $price]);
    }

    function getEbooks()
    {
        return DB::select('select * from ebook');
    }

    function getAEbook($id)
    {
        return DB::select('select * from ebook where id = ?', [$id]);
    }


}
