<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stores = Store::with('items')->get();
        return response()->json($stores);
    }



    /**
     * Show all stores according users
     */
    public function fetchStoreStores(Request $request, $storeId){
        $stores = Store::where('store_id', $storeId)->get();
        return response()->json($stores);
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
    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required|max:30|string',
            'storeName' => 'required|max:15|string',
        ]);

        $store = new Store;
        $store->storeName = $request->storeName;
        $store->description = $request->description;
        $store->user_id = 1;
        $store->save();
        return response()->json('Store successfully Saved');
    }




    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $store = Store::findOrFail($id)->with('items')->get();
        return response()->json($store);
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

        $Store = Store::findOrFail($id);
        $Store->description = $request->description;
        $Store->type = $request->type;
        $Store->amount = $request->amount;
        $Store->store_id = $request->store_id;
        $Store->save();
        return response()->json('Store Successfully Updated');
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Store = Store::destroy($id);
        return response()->json('Store Removed from Database');
    }
}
