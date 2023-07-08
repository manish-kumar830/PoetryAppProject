package com.android.manish.poetry;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitInstance {

    public static RetrofitInstance instance;
    ApiInterface apiInterface;

    RetrofitInstance(){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.150.35:5000")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        apiInterface=retrofit.create(ApiInterface.class);
    }

    public static RetrofitInstance getInstance(){
        if (instance == null){
            instance = new RetrofitInstance();
        }
        return instance;
    }
}
