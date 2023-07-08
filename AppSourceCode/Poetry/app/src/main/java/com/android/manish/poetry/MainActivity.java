package com.android.manish.poetry;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;


import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {


    HashSet<String> category;
    List<ShayariModel> shayaris;
    List<String> categoryList;
    RecyclerView categoryRecyclerView;
    CategoryAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        RetrofitInstance.getInstance().apiInterface.getShayaris().enqueue(new Callback<List<ShayariModel>>() {
            @Override
            public void onResponse(Call<List<ShayariModel>> call, Response<List<ShayariModel>> response) {
                Log.d("Test", response.body().toString());
                category = new HashSet<>();
                categoryList = new ArrayList<>();
                categoryRecyclerView = findViewById(R.id.categoryRecyclerView);
                categoryRecyclerView.setLayoutManager(new GridLayoutManager(MainActivity.this, 2));
                shayaris = response.body();
                for (int i = 0; i < shayaris.size(); i++) {
                    category.add(shayaris.get(i).getCategory());
                    Log.d("Category", shayaris.get(i).getCategory());
                }


                if (category.size() > 0) {
                    Iterator it = category.iterator();


                    while (it.hasNext()) {
                        categoryList.add(it.next().toString());
                    }

                }

                adapter = new CategoryAdapter(categoryList, MainActivity.this);

                categoryRecyclerView.setAdapter(adapter);


            }

            @Override
            public void onFailure(Call<List<ShayariModel>> call, Throwable t) {

            }
        });


    }
}