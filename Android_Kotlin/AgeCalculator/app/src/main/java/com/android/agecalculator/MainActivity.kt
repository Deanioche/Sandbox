package com.android.agecalculator

import android.app.DatePickerDialog
import android.os.Bundle
import android.os.Handler
import android.view.View
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.android.agecalculator.databinding.ActivityMainBinding
import java.text.SimpleDateFormat
import java.util.*
import kotlin.concurrent.timer


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        var binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        //    binding.btnDatePicker.setOnClickListener(View.OnClickListener { }) 아래와 같음

        binding.btnDatePicker.setOnClickListener { view ->
            clickDatePicker(view)
        }
        val sdf = SimpleDateFormat( "yyyy/MM/dd HH:mm:ss.SS")
        sdf.timeZone = TimeZone.getTimeZone("Asia/Seoul")

        val handler = Handler()
        val run = object : Runnable {
            override fun run() {

                // Insert code to be run every second.
                findViewById<TextView>(R.id.todayDate).setText(sdf.format(Date()))
                handler.postDelayed(this, 10) //run method run() every 1s.
            }
        }

        handler.post(run)
    }

    fun clickDatePicker(v: View) {

        val myCalendar = Calendar.getInstance()
        val year = myCalendar.get(Calendar.YEAR)
        val month = myCalendar.get(Calendar.MONTH) + 1
        val day = myCalendar.get(Calendar.DAY_OF_MONTH)

        DatePickerDialog(
            this,
            DatePickerDialog.OnDateSetListener { v, selectedYear, selectedMonth, selectedDayOfMonth ->

                val selectedDate = "$selectedYear/$selectedMonth/$selectedDayOfMonth"
                findViewById<TextView>(R.id.btnDatePicker).setText("$selectedDate") // 버튼 텍스트를 생일날짜로

                val sdf = SimpleDateFormat("yyyy/MM/dd HH:mm:ss.SS")
                sdf.timeZone = TimeZone.getTimeZone("Asia/Seoul")

                val calSelected = Calendar.getInstance()
                calSelected.time = sdf.parse("$selectedDate 00:00:00.00")

                findViewById<TextView>(R.id.hideText).visibility = TextView.VISIBLE

                val calNow = Calendar.getInstance()
                calNow.time = Date()

                println("calSelected : ${sdf.format(calSelected.time)}")
                println("currentTimeMillis : ${sdf.format(System.currentTimeMillis())}")


                //println("Calendar() : ${Calendar.getInstance(TimeZone.getTimeZone("Asia/Seoul"))}")
               // println("Calendar().time : ${(Calendar.getInstance(TimeZone.getTimeZone("Asia/Seoul"))).time}") // 16:58:53
                //println("timeSelected : $calNow")

                //findViewById<TextView>(R.id.lifeTime).text = "${Date().time - calNow.time}"


                //val lifeInYear = sdf.format(selectedDate)

                //findViewById<TextView>(R.id.lifeInYear).setText(lifeInYear)

                // https://developer.android.com/reference/java/text/SimpleDateFormat

                //val theDate = sdf.parse(selectedDate) // parse된 문자열은 Date 객체로 변환되 담김.

                /* val selectedDateInMinute =
                    theDate!!.time / 60000 // theDate를 non-null variable로 바꿈.
                //Date 객체에서 getTime()메소드는 1970년 1월 1일 00:00:00 부터 현재까지의 ms를 반환.

                val currentDate = sdf.parse(sdf.format(System.currentTimeMillis())) // 현재시간 ms 저장

                val currentDateToMinutes = currentDate!!.time / 60000 //

                val differenceMinutes = currentDateToMinutes - selectedDateInMinute
*/


                //findViewById<TextView>(R.id.ageInMinutes).setText(differenceMinutes.toString())

            },
            year,
            month,
            day
        ).show()
    }
}