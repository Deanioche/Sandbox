package com.android.tictactoe;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.GridLayout;
import android.widget.ImageView;
import android.widget.TableLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    // 0 = yellow, 1 = red
    int activePlayer = 0;

    boolean gameIsActive = true;

    int[] gameState = {2, 2, 2, 2, 2, 2, 2, 2, 2};

    int[][] winningPositions = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}, {0, 3, 6}, {1, 4, 7}, {2, 5, 8}, {0, 4, 8}, {2, 4, 6}};

    public void dropIn(View v) {

        ImageView counter = (ImageView) v;
        int tag = Integer.parseInt(counter.getTag().toString()); // 0 ~ 8

        if (gameState[tag] == 2 && gameIsActive) {
            gameState[tag] = activePlayer;

            counter.setAlpha(0f);
            if (activePlayer == 0) {
                counter.setImageResource(R.drawable.yellow);
                activePlayer = 1;

            } else {
                counter.setImageResource(R.drawable.red);
                activePlayer = 0;
            }
            counter.animate()
                    .alpha(1f)
                    .rotation(3600)
                    .setDuration(300);

            for (int[] wp : winningPositions) { // 승리조건에 맞는 배열이 있는지 체크
                if (gameState[wp[0]] == gameState[wp[1]] &&
                        gameState[wp[1]] == gameState[wp[2]] &&
                        gameState[wp[0]] != 2) { // 조건에 맞는게 있음

                    String winner = gameState[wp[0]] == 0 ? "Yellow" : "Red";

                    TextView tv = findViewById(R.id.winnerMessage);
                    tv.setText(winner + " has won!");
                    findViewById(R.id.playAgainLayout).setBackgroundColor(gameState[wp[0]] == 0 ? 0xFFFFF496 : 0xFFFFB3B3);
                    findViewById(R.id.playAgainLayout).setVisibility(View.VISIBLE);
                    gameIsActive = false; // 게임 종료 팝업

                } else { // 조건에 맞는게 없음

                    boolean gameIsOver = true;

                    for (int counterState : gameState) { // 판에 하나라도 빈칸(2)이 있으면 게임 속행
                        if (counterState == 2) {
                            gameIsOver = false;
                        }
                    }

                    if (gameIsOver) { // Draw!

                        TextView tv = findViewById(R.id.winnerMessage);
                        tv.setText("Draw!");
                        findViewById(R.id.playAgainLayout).setVisibility(View.VISIBLE);
                        gameIsActive = false; // 게임 종료 팝업

                    }
                }
            }

        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.againBtn).setOnClickListener(new Button.OnClickListener() { // create anonymous class
                                                           @Override
                                                           public void onClick(View v) { // 재시작 버튼
                                                               findViewById(R.id.playAgainLayout).setVisibility(View.INVISIBLE);

                                                               activePlayer = 0;

                                                               for (int i = 0; i < gameState.length; i++) {
                                                                   gameState[i] = 2;
                                                               }

                                                               GridLayout gl = findViewById(R.id.gridLayout);
                                                               for (int i = 0; i < gl.getChildCount(); i++) {
                                                                   ((ImageView) gl.getChildAt(i)).setImageResource(0); // 0 = nothing
                                                               }
                                                               gameIsActive = true;

                                                           }
                                                       }

        );

    }
}