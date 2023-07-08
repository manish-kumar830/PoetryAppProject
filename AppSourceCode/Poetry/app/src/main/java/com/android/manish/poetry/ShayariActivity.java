package com.android.manish.poetry;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ShayariActivity extends AppCompatActivity {

    List<ShayariModel> shayaris;
    RecyclerView shayariRecyclerView;
    ShayariAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shayari);

        Intent intent = getIntent();
        String category = intent.getExtras().getString("Category");


        RetrofitInstance.getInstance().apiInterface.getCategoryShayari(category).enqueue(new Callback<List<ShayariModel>>() {
            @Override
            public void onResponse(Call<List<ShayariModel>> call, Response<List<ShayariModel>> response) {
                Log.d("Test",response.body().toString());
                shayaris = response.body();
                shayariRecyclerView = findViewById(R.id.shayariRecyclerView);
                shayariRecyclerView.setLayoutManager(new LinearLayoutManager(ShayariActivity.this));
                adapter = new ShayariAdapter(shayaris,ShayariActivity.this);

                shayariRecyclerView.setAdapter(adapter);



            }

            @Override
            public void onFailure(Call<List<ShayariModel>> call, Throwable t) {
                Log.d("Test",t.toString());
            }
        });

    }
}