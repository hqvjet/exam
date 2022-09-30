<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Ebook;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function insertEbooks(Request $req, Ebook $ebook)
    {
        $ebook->insertEbook($req->input('name'),
                            $req->input('year'),
                            $req->input('price'));
    }

    function getEbooks(Ebook $ebook)
    {
        return $ebook->getEbooks();
    }

    function getAEbook(Ebook $ebook, $id) {
        return $ebook->getAEbook($id);
    }


}
