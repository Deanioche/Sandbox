package com.example.myapplication;

import android.app.Activity;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Toast;

public class MainActivity extends Activity {
    Toast mToast = null;
    int count;
    String str;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.shortmsg).setOnClickListener(mClickListener);
        findViewById(R.id.longmsg).setOnClickListener(mClickListener);
        findViewById(R.id.count).setOnClickListener(mClickListener);
        findViewById(R.id.customview).setOnClickListener(mClickListener);
    } // onCreate

    Button.OnClickListener mClickListener = new Button.OnClickListener()
    {
        public void onClick(View v) {
            switch(v.getId()) {
                case R.id.shortmsg:
                    Toast.makeText(MainActivity.this, "Short Time Message",
                            Toast.LENGTH_SHORT).show();
                    break;
                case R.id.longmsg:
                    Toast.makeText(MainActivity.this, "Long Time Message",
                            Toast.LENGTH_LONG).show();
                    break;
                case R.id.count:
                    str = "Count = " + count++;
                    if(mToast != null)
                    {
                        mToast.cancel();
                    }
                    mToast = Toast.makeText(MainActivity.this, str,
                            Toast.LENGTH_SHORT);
                    mToast.show();
                    break;
                case R.id.customview:
                    LinearLayout linear =
                            (LinearLayout)View.inflate(MainActivity.this,
                                    R.layout.toast_view, null);
                    Toast t2 = new Toast(MainActivity.this);
                    t2.setView(linear);
                    t2.show();
                    break;
            } //of switch
        } //of onClick
    }; //of OnClickListener
} //of MainActivity