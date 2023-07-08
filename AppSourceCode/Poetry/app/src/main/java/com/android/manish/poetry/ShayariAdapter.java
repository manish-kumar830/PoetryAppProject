package com.android.manish.poetry;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class ShayariAdapter extends RecyclerView.Adapter<ShayariAdapter.ShayariViewHolder> {

    List<ShayariModel> shayariList = new ArrayList<>();
    Context context;

    public ShayariAdapter(List<ShayariModel> shayariList, Context context) {
        this.shayariList = shayariList;
        this.context = context;
    }

    @NonNull
    @Override
    public ShayariAdapter.ShayariViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.shayari_item,parent,false);
        return new ShayariViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ShayariAdapter.ShayariViewHolder holder, int position) {
        holder.shayariText.setText(shayariList.get(position).getShayari());
        holder.shareTextBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent share = new Intent(Intent.ACTION_SEND);
                share.setType("text/plane");
                share.putExtra(Intent.EXTRA_TEXT,shayariList.get(holder.getAdapterPosition()).getShayari());
                context.startActivity(share);
            }
        });

        holder.copyTextBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ClipboardManager clipboardManager = (ClipboardManager) context.getSystemService(Context.CLIPBOARD_SERVICE);
                ClipData data = (ClipData) ClipData.newPlainText("text",shayariList.get(holder.getAdapterPosition()).getShayari());
                clipboardManager.setPrimaryClip(data);
                Toast.makeText(context, "Shayari Copied Successfully", Toast.LENGTH_SHORT).show();
            }
        });
    }

    @Override
    public int getItemCount() {
        return shayariList.size();
    }

    public class ShayariViewHolder extends RecyclerView.ViewHolder{

        TextView shayariText;
        Button shareTextBtn, copyTextBtn;

        public ShayariViewHolder(@NonNull View itemView) {
            super(itemView);

            shayariText = itemView.findViewById(R.id.shayariText);
            shareTextBtn = itemView.findViewById(R.id.shareTextBtn);
            copyTextBtn = itemView.findViewById(R.id.copyTextBtn);
        }
    }
}
