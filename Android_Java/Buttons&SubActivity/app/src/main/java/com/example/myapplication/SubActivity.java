package com.example.myapplication;

import android.app.Activity;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import androidx.annotation.Nullable;

import java.util.ArrayList;

public class SubActivity  extends Activity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sub_activity);

        ArrayList<String> al = new ArrayList<String>();
        al.add("APPLE");
        al.add("BANANA");
        al.add("ORANGE");
        al.add("MANGO");
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.array, android.R.layout.simple_list_item_multiple_choice);
        ListView list = findViewById(R.id.list);
        list.setAdapter(adapter);
        list.setChoiceMode(ListView.CHOICE_MODE_SINGLE);
        list.setDivider(new ColorDrawable(Color.BLACK));
        list.setDividerHeight(1);
    }

    public void mOnClick(View v) {
        finish(); // 액티비티 종료
    }


}
