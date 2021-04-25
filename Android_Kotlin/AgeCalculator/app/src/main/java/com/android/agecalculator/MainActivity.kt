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
                findViewById<TextView>(R.id.todayDate).text = sdf.format(Date())
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

        val dpd = DatePickerDialog(
            this,
            DatePickerDialog.OnDateSetListener { _, selectedYear, selectedMonth, selectedDayOfMonth ->

                // 선택된 날짜
                val selectedDate = "$selectedYear/${selectedMonth +1}/$selectedDayOfMonth"
                // 버튼 텍스트 변경
                findViewById<TextView>(R.id.btnDatePicker).text = "$selectedDate"

                val sdf = SimpleDateFormat( "yyyy/MM/dd")
                //sdf.timeZone = TimeZone.getTimeZone("Asia/Seoul")

                val calSelected = Calendar.getInstance()
                calSelected.time = sdf.parse("$selectedDate")

                val calNow = Calendar.getInstance()
                //calNow.timeZone = TimeZone.getTimeZone("Asia/Seoul")

                val cal1970 = Calendar.getInstance()
                cal1970.timeInMillis = 0

                findViewById<TextView>(R.id.hideText).visibility = TextView.VISIBLE

                calNow.set(Calendar.HOUR_OF_DAY, 0)
                calNow.set(Calendar.MINUTE, 0)
                calNow.set(Calendar.SECOND, 0)
                calNow.set(Calendar.MILLISECOND, 0)

                val calDiff = Calendar.getInstance()

                calDiff.timeInMillis = calNow.timeInMillis - calSelected.timeInMillis

                val diffYear = if((calDiff.get(Calendar.YEAR) - 1970) <= 1){ "${(calDiff.get(Calendar.YEAR) - 1970)} year "} else {"${(calDiff.get(Calendar.YEAR) - 1970)} years" }
                val diffMonth = if(calDiff.get(Calendar.MONTH) <= 1) {"${calDiff.get(Calendar.MONTH)} month"} else {"${calDiff.get(Calendar.MONTH)} months" }
                val diffDay = if((calDiff.get(Calendar.DAY_OF_MONTH) - 1) <= 1){ "${calDiff.get(Calendar.DAY_OF_MONTH) - 1} day" } else {"${calDiff.get(Calendar.DAY_OF_MONTH) - 1} days"}

                val timeNow = Calendar.getInstance()
                timeNow.timeInMillis = System.currentTimeMillis()

                val diffHour = if(timeNow.get(Calendar.HOUR_OF_DAY) <= 1){ "${timeNow.get(java.util.Calendar.HOUR_OF_DAY)} hour" }else {"${timeNow.get(java.util.Calendar.HOUR_OF_DAY)} hours"}
                val diffMinute = if(timeNow.get(Calendar.MINUTE) <= 1){ "${timeNow.get(Calendar.MINUTE)} minute"} else {"${timeNow.get(Calendar.MINUTE)} minutes"}
                val diffSecond = if(timeNow.get(Calendar.SECOND) <= 1){ "${timeNow.get(Calendar.SECOND)} second"} else {"${timeNow.get(Calendar.SECOND)} seconds"}

                findViewById<TextView>(R.id.lifeTime).text = "$diffYear \n$diffMonth \n$diffDay \n$diffHour \n$diffMinute \n$diffSecond"

                findViewById<TextView>(R.id.carryOn).visibility = TextView.VISIBLE

                // https://developer.android.com/reference/java/text/SimpleDateFormat

                //val theDate = sdf.parse(selectedDate) // parse된 문자열은 Date 객체로 변환되 담김.

                /* val selectedDateInMinute =
                    theDate!!.time / 60000 // theDate를 non-null variable로 바꿈.
                //Date 객체에서 getTime()메소드는 1970년 1월 1일 00:00:00 부터 현재까지의 ms를 반환.

                val currentDate = sdf.parse(sdf.format(System.currentTimeMillis())) // 현재시간 ms 저장

                val currentDateToMinutes = currentDate!!.time / 60000 //
*/
            },
            year,
            month,
            day
        )

        dpd.datePicker.maxDate = Date().time // 이전 날짜만 선택하도록 제한 + 9시간  - 54000000
        dpd.show()
    }
}