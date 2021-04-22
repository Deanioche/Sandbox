package com.android.eggtimer;

import androidx.appcompat.app.AppCompatActivity;

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
        progresBar.setProgress(300); // 5mins
        timerText.setText("5:00");

        mediaPlayer = MediaPlayer.create(getApplicationContext(), R.raw.sos_morse_code);

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
                    System.out.println(millisUntilFinished);
                    updateTimer((int) (millisUntilFinished / 1000));

                }

                @Override
                public void onFinish() {
                    Log.i("123","end");
                    mediaPlayer.start();

                    resetTimer();
                }
            }.start();
        } else {
            resetTimer();
        }
    }

    public void updateTimer(int secLeft) {

        timerTranslate();
        timerText.setText(secLeft / 60 + ":" + String.format("%02d", secLeft % 60));

    }

    public void timerTranslate() {

        if (progresBar.getProgress() == 600) {
            timerText.setTranslationX(-40f);
            moved = true;
        } else if (progresBar.getProgress() < 600 && moved) {
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