package com.android.manish.poetry;

public class ShayariModel {

    private String _id;
    private String shayari;
    private String category;

    public String get_id() {
        return _id;
    }

    public String getShayari() {
        return shayari;
    }

    public String getCategory() {
        return category;
    }

    public ShayariModel(String _id, String shayari, String category) {
        this._id = _id;
        this.shayari = shayari;
        this.category = category;
    }
}
