package com.android.retrofit_test

import retrofit2.Call
import retrofit2.http.*

// 데이터 수신용
data class ResponseDC(
    var result: Any? = null,
    var data: ResponseJson? = null
)

data class ResponseJson(
    var id: Number? = null,
    var pwd: String? = null,
    var nick: String? = null
)

interface APIInterface {

    @GET("/")
    fun getRequest(@QueryMap params: Map<String, String>): Call<ResponseDC>

//    @FormUrlEncoded
//    @POST("/")
//    fun postRequest(
//        @Field("id") id: Number,
//        @Field("pwd") password: String,
//        @Field("nick") nick: String
//    ): Call<ResponseDC>

    @POST("/")
    @Headers("accept: application/json", "content-type: application/json")
    fun postRequest(
        @Body params: Map<String, String> // it works
    ): Call<ResponseDC>

    @FormUrlEncoded
    @PUT("/{id}")
    fun putRequest(
        @Path("id") id: String, // url로 감
        @Field("content") content: String
    ): Call<ResponseDC>

    @DELETE("/{id}")
    fun deleteRequest(@Path("id") id: String): Call<ResponseDC>
}