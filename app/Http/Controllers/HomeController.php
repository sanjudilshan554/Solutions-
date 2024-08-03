<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{    
    /**
     * Index
     * render home page
     *
     * @return void
     */
    public function index(){
        return Inertia::render('Home/index');
    }

}
