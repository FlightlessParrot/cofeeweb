<?php

namespace App\Http\Controllers;

use App\Models\Happening;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class HappeningController extends Controller
{
    
    /**
     * Display a listing of the resource.
     * 
     * @param enu
     */
    public function index(string $type)
    {
        $happ=Happening::where('type',$type)->get();
        $title=$type==='birthday' ? 'Ofertę urodzinową' : 'Ofertę warsztatową';
        return Inertia::render('Offer',['happenings'=>$happ, 'titleSpan'=>$title]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $happ=Happening::all();
        return Inertia::render('Admin',['happenings'=>$happ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'type'=>'required',
            'title'=>'required',
            'description'=>'required',
            'body'=>'required',
            'date'=>'required',
            'time'=>'required',
            
        ]);

        $happening=Happening::create($request->all());
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     * 
     * @param Happening $happening 
     */
    public function show(string $type, Happening $happening) : \Inertia\Response
    {
      
        return Inertia::render('Event',['happening'=>$happening]);
    }
    /**
     * Upload image
     * 
     * 
     * 
     */
    public function upload(Request $request, Happening $happening) : RedirectResponse
    {
        if($happening->path)
        {
            Storage::delete($happening->path);
        }
        $path = Storage::putFile('/public/images', $request->file('image'));
        $happening->image= Storage::url($path);
        $happening->path=$path;
        $happening->save();
        return redirect()->back();
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Happening $happening)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Happening $happening)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Happening $happening) : RedirectResponse
    {
        $happening->delete();
        return redirect()->back();
    }
}
