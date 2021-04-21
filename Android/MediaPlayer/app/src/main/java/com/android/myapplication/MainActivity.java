package com.android.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.MediaController;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.VideoView;

import java.text.DecimalFormat;
import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends AppCompatActivity {

    AudioManager am;
    MediaPlayer mediaPlayer;
    TextView voltv;
    TextView progressTime;
    String timeLeft;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Video

        VideoView vv = findViewById(R.id.videoView);

        vv.setVideoPath("android.resource://" + getPackageName() + "/" + R.raw.we_loved);

        MediaController mc = new MediaController(this); // 미디어 컨트롤러 추가

        mc.setAnchorView(vv);

        vv.setMediaController(mc);

        //Audio

        mediaPlayer = MediaPlayer.create(this, R.raw.ambulance); // 음악파일 담기
        voltv = findViewById(R.id.volText);
        progressTime = findViewById(R.id.progressTime);

        am = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
        int maxVolume = am.getStreamMaxVolume(am.STREAM_MUSIC); // 시스템의 최대 볼륨
        int curVolume = am.getStreamVolume(am.STREAM_MUSIC); // 시스템 현재 볼륨

        voltv.setText(Integer.toString(curVolume));

        SeekBar seekBar2 = findViewById(R.id.seekBar);
        SeekBar progressBar = findViewById(R.id.progressBar);

        seekBar2.setMax(maxVolume);
        seekBar2.setProgress(curVolume);

        seekBar2.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {

                Log.i("SeekVar value", Integer.toString(progress));
                voltv.setText(Integer.toString(progress));
                am.setStreamVolume(am.STREAM_MUSIC, progress, 0); // flag : 추가적인 정보. 0은 없음.

            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });

        progressBar.setMax(mediaPlayer.getDuration()); // set Max value as duration of the audio : mediaPlayer


        new Timer().scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                progressBar.setProgress(mediaPlayer.getCurrentPosition());

                int a = (progressBar.getMax() - progressBar.getProgress());

                timeLeft = a/1000 + "." + (a/100)%10;

            }
        }, 0, 50); // 0 : delay to start timer. 1000 : Update the value of progressBar every 50ms.

        progressBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {

                mediaPlayer.seekTo(progress);
                progressTime.setText(timeLeft + "s left");

            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });
    }

    public void playMusic(View view){  mediaPlayer.start(); }

    public void pauseMusic(View view){  mediaPlayer.pause(); }




}