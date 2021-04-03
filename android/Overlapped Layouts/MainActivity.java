package com.example.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends Activity {
    View Page1, Page2, Page3;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Page1 = findViewById(R.id.page1);
        Page2 = findViewById(R.id.page2);
        Page3 = findViewById(R.id.page3);
        findViewById(R.id.btn1).setOnClickListener(mClickListener);
        findViewById(R.id.btn2).setOnClickListener(mClickListener);
        findViewById(R.id.btn3).setOnClickListener(mClickListener);
    }

    Button.OnClickListener mClickListener = new Button.OnClickListener() {
        public void onClick(View v) {
            Page1.setVisibility(View.INVISIBLE);
            Page2.setVisibility(View.INVISIBLE);
            Page3.setVisibility(View.INVISIBLE);
            switch (v.getId()) {
                case R.id.btn1:
                    Page1.setVisibility(View.VISIBLE);
                    break;
                case R.id.btn2:
                    Page2.setVisibility(View.VISIBLE);
                    break;
                case R.id.btn3:
                    Page3.setVisibility(View.VISIBLE);
                    break;

            }
            Toast.makeText(MainActivity.this, "무야~호~", Toast.LENGTH_LONG).show();
        }
    };
}