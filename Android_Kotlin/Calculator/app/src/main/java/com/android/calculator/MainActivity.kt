package com.android.calculator

import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.android.calculator.databinding.ActivityMainBinding
import java.lang.ArithmeticException


class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    var lastNumeric : Boolean = false
    var lastDot : Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }

    fun onDigit(view: View) {
        binding.tvInput.append((view as Button).text) // append Btn.text
        lastNumeric = true
    }

    fun onClear(view: View){
        binding.tvInput.text = "" // Clear tvInput
        lastNumeric = false
        lastDot = false
    }

    fun onDecimalPoint(view: View){
        if(lastNumeric && !lastDot){ // lastInput was Number and not Dot
            binding.tvInput.append(".")
            lastNumeric = false
            lastDot = true
        }
    }

    fun onEqual(view: View){
        if(lastNumeric){
            var tvValue = binding.tvInput.text.toString() // store tvInput.text

            var prefix = ""

            try {
                if(tvValue.startsWith("-")){ // if starts with minus
                    prefix = "-" // store operator
                    tvValue = tvValue.substring(1) // ignore minus
                }

                if(tvValue.contains("-")){
                    val splitValue = tvValue.split("-")

                        var one = splitValue[0] // 99
                        var two = splitValue[1] // 1

                    if(!prefix.isEmpty()){ // if prefix is not empty
                        one = prefix + one // is Negative
                    }

                    binding.tvInput.text = removeZeroAfterDot((one.toDouble() - two.toDouble()).toString())

                }else if(tvValue.contains("/")){
                    val splitValue = tvValue.split("/")

                    var one = splitValue[0] // 99
                    var two = splitValue[1] // 1

                    if(!prefix.isEmpty()){ // if prefix is not empty
                        one = prefix + one // is Negative
                    }

                    binding.tvInput.text = removeZeroAfterDot((one.toDouble() / two.toDouble()).toString())

                }else if(tvValue.contains("+")){
                    val splitValue = tvValue.split("+")

                    var one = splitValue[0] // 99
                    var two = splitValue[1] // 1

                    if(!prefix.isEmpty()){ // if prefix is not empty
                        one = prefix + one // is Negative
                    }

                    binding.tvInput.text = removeZeroAfterDot((one.toDouble() + two.toDouble()).toString())

                }else if(tvValue.contains("*")){
                    val splitValue = tvValue.split("*")

                    var one = splitValue[0] // 99
                    var two = splitValue[1] // 1

                    if(!prefix.isEmpty()){ // if prefix is not empty
                        one = prefix + one // is Negative
                    }

                    binding.tvInput.text = removeZeroAfterDot((one.toDouble() * two.toDouble()).toString())

                }
            }catch (e : ArithmeticException){
                e.printStackTrace()
            }
        }
    }

    private fun removeZeroAfterDot(result: String) : String {
        var value = result
        if(result.contains(".0")){ // if tvInput contains .0
            value = result.substring(0, result.length - 2) // get rid of last 2 words 99.0 -> 99
        }
        return value
    }

    fun onOperator(view: View){
        if(lastNumeric && !isOperatrorAdded(binding.tvInput.text.toString())){ // lastInput was Number and not an Operator
            binding.tvInput.append((view as Button).text)
            lastNumeric = false
            lastDot = false
        }
    }

    private fun isOperatrorAdded(value: String) : Boolean{
        return if(value.startsWith("-")){
            false
        }else {
            value.contains("/") || value.contains("*") || value.contains("+") || value.contains("-")
        }
    }
}