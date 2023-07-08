package com.android.manish.poetry;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface ApiInterface {

    @GET("/shayari/android/")
    Call<List<ShayariModel>> getShayaris();

    @GET("/shayari/category/{category}")
    Call<List<ShayariModel>> getCategoryShayari(@Path("category") String Category);
}
