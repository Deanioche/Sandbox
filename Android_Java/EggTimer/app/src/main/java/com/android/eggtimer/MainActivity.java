package com.android.eggtimer;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.ls.LSOutput;

import java.text.DecimalFormat;

public class MainActivity extends AppCompatActivity {

    boolean moved = false;
    boolean working = false;

    TextView timerText;
    SeekBar progresBar;
    Button timerBtn;

    CountDownTimer cp;

    MediaPlayer mediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        progresBar = findViewById(R.id.progressBar);
        timerText = findViewById(R.id.timer);
        timerBtn = findViewById(R.id.timerBtn);

        progresBar.setMax(600); // 10mins maximum
        progresBar.setProgress(3); // 5mins
        timerText.setText("0:03");

        mediaPlayer = MediaPlayer.create(getApplicationContext(), R.raw.whistling);
        System.out.println(mediaPlayer.getDuration());

        progresBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {

                updateTimer(progress);
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });

    }

    public void buttonPressed(View v) {

        if (!working) {
            working = true;
            progresBar.setEnabled(false);
            timerBtn.setText("Stop");

            cp = new CountDownTimer(progresBar.getProgress() * 1000 + 100, 1000) { // 10sec, 1 tick : 1sec

                @Override
                public void onTick(long millisUntilFinished) {

                    System.out.println(millisUntilFinished/1000);
                    updateTimer((int) (millisUntilFinished / 1000));
                }

                @Override
                public void onFinish() {
                    mediaPlayer.start();

                    new AlertDialog.Builder(MainActivity.this)
                            .setTitle("Finish!")
                            .setMessage("Timer Done!")
                            .setIcon(R.drawable.ic_launcher_background)
                            // 버튼이 Positive든 negative 든 Neutral이든 Alert가 꺼지는건 같으므로 동작부분을 null로 넣어도 됨 (닫기버튼으로써 동작)
                            .setPositiveButton("Confirm", new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialog, int which) {
                                    resetTimer();
                                }
                            })
                            .setCancelable(false) // 뒤로가기 버튼 비활성화, Alert의 버튼을 통해서만 창을 닫을 수 있다.
                            .show();
                }
            }.start();
        } else {
            resetTimer();
        }
    }

    public void updateTimer(int secLeft) {

        timerTranslate(secLeft);
        timerText.setText(secLeft / 60 + ":" + String.format("%02d", secLeft % 60));

    }

    public void timerTranslate(int secLeft) {

        if (secLeft == 600) {
            timerText.setTranslationX(-40f);
            moved = true;
        } else if (secLeft < 600 && moved) {
            timerText.setTranslationX(0);
            moved = false;
        }

    }

    public void resetTimer() {

        timerText.setText("5:00");
        progresBar.setProgress(300);
        cp.cancel();
        timerBtn.setText("Go!");
        progresBar.setEnabled(true);
        working = false;

    }

}