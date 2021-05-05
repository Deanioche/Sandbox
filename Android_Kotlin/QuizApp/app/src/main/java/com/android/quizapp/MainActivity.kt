package com.android.quizapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.Toast
import com.android.quizapp.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_FULLSCREEN // 상단 상태바 제거(시계 LTE 등)

        binding.btnStart.setOnClickListener{
            if(binding.etName.text.toString().isEmpty()) {
                Toast.makeText(this, "Please Enter your name", Toast.LENGTH_SHORT).show()
            }else{
                Toast.makeText(this, "Welcome, ${binding.etName.text.toString()}!" , Toast.LENGTH_SHORT).show()
                val intent = Intent(this, QuestionActivity::class.java)
                startActivity(intent)
                finish()
            }
        }
    }
}