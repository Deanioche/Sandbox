package com.example.myapplication;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.media.AudioManager;
import android.media.SoundPool;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Message;
import android.os.PersistableBundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.Calendar;

public class MainActivity extends Activity {
    Toast mToast = null;
    int count;
    String str;
    SoundPool mPool;
    int mDing;
    AudioManager mAm;

    TextView mTimer;
    int value = 100;

    ArrayAdapter<CharSequence> adspin;

    final static int SampleDialog = 0;
    final static int QuestionDialog = 1;
    final static int ExitDialog = 999;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Sound
        mPool = new SoundPool(1, AudioManager.STREAM_MUSIC, 0);
        //mDing = mPool.load(this, R.raw.bgm, 1);
        mAm = (AudioManager) getSystemService((AUDIO_SERVICE));

        // Timer
        mTimer = findViewById(R.id.timer);
        mHandler.sendEmptyMessage(0);

        //list
        Spinner spin = findViewById(R.id.myspinner);
        String promptText = getString(R.string.myspinnerName);
        spin.setPrompt(promptText);
        adspin = ArrayAdapter.createFromResource(this, R.array.array, android.R.layout.simple_spinner_dropdown_item);
        adspin.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spin.setAdapter(adspin);
        spin.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                Toast.makeText(MainActivity.this, adspin.getItem(position), Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

        // AlertDialog
        Button btn = findViewById(R.id.btnAlert2);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            @SuppressWarnings("deprecation") // deprecation 경고 방지
            public void onClick(View v) {

                EditText telText = findViewById(R.id.telText);

                String text = String.valueOf(telText.getText());

                if(text != null){
                    showDialog(Integer.parseInt(text));
                }else{
                    showDialog(999);
                }

            }
        });


        //Event
        findViewById(R.id.shortmsg).setOnClickListener(mClickListener);
        findViewById(R.id.longmsg).setOnClickListener(mClickListener);
        findViewById(R.id.count).setOnClickListener(mClickListener);
        findViewById(R.id.customview).setOnClickListener(mClickListener);
        findViewById(R.id.mymsg).setOnClickListener(mClickListener);
        findViewById(R.id.mysound).setOnClickListener(mClickListener);
        findViewById(R.id.btnAlert).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new AlertDialog.Builder(MainActivity.this)
                    .setTitle(getString(R.string.myText))
                    .setMessage("AlertDialog Test is success!!")
                    .setIcon(R.drawable.ic_launcher_background)
                        // 버튼이 Positive든 negative 든 Neutral이든 Alert가 꺼지는건 같으므로 동작부분을 null로 넣어도 됨 (닫기버튼으로써 동작)
                        .setPositiveButton("Posi", null)
                        .setNegativeButton("Nega", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {}
                        })
                        .setNeutralButton("Neutral", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {}
                        })
                    .setCancelable(false) // 뒤로가기 버튼 비활성화, Alert의 버튼을 통해서만 창을 닫을 수 있다.
                    .show();
            }
        });
        findViewById(R.id.callBtn).setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                EditText telText = findViewById(R.id.telText);

                Intent intent = new Intent(Intent.ACTION_DIAL);
                intent.setData(Uri.parse("tel: " + telText.getText()));
                startActivity(intent); // intent 객체에 담긴 액티비티 호출
            }
        });
    } // onCreate

    protected Dialog onCreateDialog(int id){
        switch (id){
            case SampleDialog:
                return new AlertDialog.Builder(MainActivity.this)
                        .setTitle("쌤플 땰로그")
                        .setMessage("쌤플땰로그 썽공!")
                        .setIcon(R.drawable.banana)
                        .setPositiveButton("바나나?", null)
                        .create();
            case QuestionDialog:
                return new AlertDialog.Builder(MainActivity.this)
                        .setTitle("질문!")
                        .setMessage("질문땰로그 썽공!")
                        .setIcon(R.drawable.start)
                        .setPositiveButton("스타트?", null)
                        .setNegativeButton("아니여?", null)
                        .create();
            case ExitDialog:
                return new AlertDialog.Builder(MainActivity.this)
                        .setTitle("에러!")
                        .setMessage("앱을 종료합니다.")
                        .setIcon(R.drawable.ic_launcher_foreground)
                        .setCancelable(false)
                        .setPositiveButton("EXIT", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                finish();
                            }
                        })
                        .create();
        }

        return null;
    }

    @Override
    protected void onPrepareDialog(int id, Dialog dialog) {
        switch (id){
            case SampleDialog:
                break;
            case QuestionDialog:
                Calendar cal = Calendar.getInstance();
                String stime = String.format("Time %d:%d:%d",
                        cal.get(Calendar.HOUR_OF_DAY),
                        cal.get(Calendar.MINUTE),
                        cal.get(Calendar.SECOND));
                dialog.setTitle(stime);
                break;
        }
    }

    @Override
    protected void onStart() {
        super.onStart();
        System.out.println("onStart");
    }

    Handler mHandler = new Handler() {
        public void handleMessage(Message msg) {
            value++;
            mTimer.setText("Timer Value = " + value);
            mHandler.sendEmptyMessageDelayed(0, 1000);
        }
    };

    Button.OnClickListener mClickListener = new Button.OnClickListener() {
        public void onClick(View v) {

            TextView tv = findViewById(R.id.mysound);

            switch (v.getId()) {
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
                    if (mToast != null) {
                        mToast.cancel();
                    }
                    mToast = Toast.makeText(MainActivity.this, str,
                            Toast.LENGTH_SHORT);
                    mToast.show();
                    break;
                case R.id.customview:
                    LinearLayout linear =
                            (LinearLayout) View.inflate(MainActivity.this,
                                    R.layout.toast_view, null);
                    Toast t2 = new Toast(MainActivity.this);
                    t2.setView(linear);
                    t2.show();
                    break;
                case R.id.mymsg:
                    LinearLayout myLinear =
                            (LinearLayout) View.inflate(MainActivity.this, R.layout.my_view, null);
                    Toast t3 = new Toast(MainActivity.this);
                    t3.setView(myLinear);
                    t3.show();
                    String mytxt = "응애~";
                    count += 100;
                    Toast.makeText(MainActivity.this, mytxt, Toast.LENGTH_SHORT).show();

                    tv.setText("무야~호~");
                    break;
                case R.id.mysound:
                    //mPool.play(mDing, 1, 1, 0, 0, 1);
                    mAm.playSoundEffect((AudioManager.FX_KEYPRESS_SPACEBAR));
                    break;

            } //of switch
        } //of onClick
    }; //of OnClickListener

    public void mOnClick(View view) {

        Intent intent = new Intent(this, SubActivity.class);
        startActivity(intent); // intent 객체에 담긴 액티비티 호출
    }

} //of MainActivity