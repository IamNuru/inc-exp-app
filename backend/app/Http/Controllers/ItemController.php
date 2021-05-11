<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Item::get();
        return response()->json($items);
    }



    /**
     * Show all items according stores
     */
    public function fetchStoreItems(Request $request, $storeId){
        $items = Item::where('store_id', $storeId)->get();
        return response()->json($items);
    }




    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }






    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $store_id)
    {
        $request->validate([
            'description' => 'required|max:15|string',
            'type' => 'required|max:4|string',
            'amount' => 'required',
        ]);

        $item = new Item;
        $item->description = $request->description;
        $item->type = $request->type;
        $item->amount = $request->amount;
        $item->store_id = $store_id;
        $item->save();
        return response()->json('Item successfully Saved');
    }




    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $item = Item::findOrFail($id);
        $item = Item::where('store_id' , $id)->get();
        return response()->json($item);
    }





    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }






    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'description' => 'required|max:15|string',
            'type' => 'required|max:4|string',
            'amount' => 'required',
        ]);

        $item = Item::findOrFail($id);
        $item->description = $request->description;
        $item->type = $request->type;
        $item->amount = $request->amount;
        $item->store_id = $request->store_id;
        $item->save();
        return response()->json('Item Successfully Updated');
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::destroy($id);
        return response()->json('Item Removed from Database');
    }
}
