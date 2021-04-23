package com.android.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }

    public void buttonTapped(View v) {

        int id = v.getId(); // 해당 View의 id값 반환

        String ourId = v.getResources().getResourceEntryName(id); // 받은 id의 별명 반환

        int resourceId = getResources().getIdentifier(ourId, "raw", "com.android.myapplication"); // 파일명, 파일이 들어있는 패키지(폴더)명, 프로젝트의 패키지명
        // 패키지 안의 raw폴더에서 ourId와 일치하는 파일의 id 반환

        MediaPlayer mplayer = MediaPlayer.create(this, resourceId);

        mplayer.start();

    }

}