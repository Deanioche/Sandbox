package com.android.retrofit_test

import android.os.Bundle
import android.util.ArrayMap
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.android.retrofit_test.databinding.ActivityMainBinding
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory


class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // view binding
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // refrofit connection
//        val url = "https://nodejs-surimi.run.goorm.io" // linux
        val url = "https://e5c3c76c2c7e.ngrok.io" // vscode

        val retrofit = Retrofit.Builder()
            .baseUrl(url)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
        var server = retrofit.create(APIInterface::class.java)

        binding.buttonGET.setOnClickListener {

            val map = HashMap<String, String>()
            map.put("id", "0")
            map.put("pwd", "123")
            map.put("nick", "surimi")

            server.getRequest(map).enqueue(object : Callback<ResponseDC> {
                override fun onFailure(call: Call<ResponseDC>, t: Throwable) {
                    Log.d("failure : ", t?.message.toString())
                }

                override fun onResponse(call: Call<ResponseDC>, response: Response<ResponseDC>) {
                    Log.d("response : ", response?.body().toString())
                }

            })
        }

        binding.buttonPOST.setOnClickListener {

            val map = HashMap<String, String>()
            map.put("id", "0")
            map.put("pwd", "123")
            map.put("nick", "surimi")

//            server.postRequest(map["id"] as Number, map["pwd"] as String, map["nick"] as String).enqueue((object : Callback<ResponseDC> {
            server.postRequest(map).enqueue((object : Callback<ResponseDC> {

                override fun onResponse(
                    call: Call<ResponseDC>,
                    response: Response<ResponseDC>
                ) {
                    Log.d("response : ", response?.body().toString())
                    println(response?.body()?.data)
                    println(response?.body()?.data?.id)
                    println(response?.body()?.data?.pwd)
                    println(response?.body()?.data?.nick)
                }

                override fun onFailure(call: Call<ResponseDC>, t: Throwable) {

                }

            }))
        }
        binding.buttonUPDATE.setOnClickListener {
            server.putRequest("board", "내용").enqueue((object : Callback<ResponseDC> {
                override fun onFailure(call: Call<ResponseDC>, t: Throwable) {

                }

                override fun onResponse(call: Call<ResponseDC>, response: Response<ResponseDC>) {
                    Log.d("response : ", response?.body().toString())
                }
            }))
        }
        binding.buttonDELETE.setOnClickListener {
            server.deleteRequest("board").enqueue((object : Callback<ResponseDC> {
                override fun onFailure(call: Call<ResponseDC>, t: Throwable) {

                }

                override fun onResponse(call: Call<ResponseDC>, response: Response<ResponseDC>) {
                    Log.d("response : ", response?.body().toString())
                }
            }))
        }

    }

}