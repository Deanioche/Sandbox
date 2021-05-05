package com.android.quizapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.android.quizapp.databinding.ActivityMainBinding

class QuestionActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_question)

        val questionList = Constants.getQuestions()

        Toast.makeText(this, "Question size = ${questionList.size}", Toast.LENGTH_SHORT).show()
    }
}