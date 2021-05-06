package com.android.quizapp

import android.graphics.Color
import android.graphics.Typeface
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import androidx.core.content.ContextCompat
import com.android.quizapp.databinding.ActivityMainBinding

class QuestionActivity : AppCompatActivity(), View.OnClickListener {

    private var mCurrentPosition: Int = 1
    private var mQuestionsList: ArrayList<Question>? = null
    private var mSelectedOptionPosition: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_question)

        mQuestionsList = Constants.getQuestions()

        setQuestion()

        findViewById<TextView>(R.id.tv_option_one).setOnClickListener(this)
        findViewById<TextView>(R.id.tv_option_two).setOnClickListener(this)
        findViewById<TextView>(R.id.tv_option_three).setOnClickListener(this)
        findViewById<TextView>(R.id.tv_option_four).setOnClickListener(this)

    }

    private fun setQuestion() {

        mCurrentPosition = 1
        val question = mQuestionsList!![mCurrentPosition - 1]

        findViewById<ProgressBar>(R.id.progressBar).progress = mCurrentPosition

        findViewById<TextView>(R.id.tv_progress).text =
            "$mCurrentPosition / ${findViewById<ProgressBar>(R.id.progressBar).max}"

        findViewById<TextView>(R.id.tv_question).text = question!!.question
        findViewById<ImageView>(R.id.iv_image).setImageResource(question.image)
        findViewById<TextView>(R.id.tv_option_one).text = question.optionOne
        findViewById<TextView>(R.id.tv_option_two).text = question.optionTwo
        findViewById<TextView>(R.id.tv_option_three).text = question.optionThree
        findViewById<TextView>(R.id.tv_option_four).text = question.optionFour

    }

    private fun defaultOptionsView() {
        val options = ArrayList<TextView>()
        options.add(0, findViewById<TextView>(R.id.tv_option_one))
        options.add(1, findViewById<TextView>(R.id.tv_option_two))
        options.add(2, findViewById<TextView>(R.id.tv_option_three))
        options.add(3, findViewById<TextView>(R.id.tv_option_four))

        for (option in options) {
            option.setTextColor(Color.parseColor("#7A8089"))
            option.typeface = Typeface.DEFAULT
            option.background = ContextCompat.getDrawable(this, R.drawable.default_option_border_bg)
        }
    }

    override fun onClick(v: View?) {
        when (v?.id) {
            R.id.tv_option_one -> {
                selectedOptionView(findViewById<TextView>(R.id.tv_option_one), 1)
            }
            R.id.tv_option_two -> {
                selectedOptionView(findViewById<TextView>(R.id.tv_option_two), 1)
            }
            R.id.tv_option_three -> {
                selectedOptionView(findViewById<TextView>(R.id.tv_option_three), 1)
            }
            R.id.tv_option_four -> {
                selectedOptionView(findViewById<TextView>(R.id.tv_option_four), 1)
            }

        }

    }

    private fun selectedOptionView(tv: TextView, selectedOptionNum: Int) {
        defaultOptionsView()
        mSelectedOptionPosition = selectedOptionNum
        tv.setTextColor(Color.parseColor("#363A43"))
        tv.setTypeface(tv.typeface, Typeface.BOLD)
        tv.background = ContextCompat.getDrawable(this, R.drawable.selected_option_border_bg)
    }
}