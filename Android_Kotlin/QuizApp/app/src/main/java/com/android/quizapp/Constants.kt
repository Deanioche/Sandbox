package com.android.quizapp

object Constants {

    fun getQuestions(): ArrayList<Question> {
        val questionsList = ArrayList<Question>()

        val q1 = Question(
            1, "What company does this symbol belong to?",
            R.drawable.ic_launcher_foreground, "Android", "Apple", "Google", "Korea", 1
        )
        val q2 = Question(
            2, "What country does this flag belong to?",
            R.drawable.ic_flag_of_argentina, "Australia", "Spain", "Argentina", "Chile", 1
        )
        val q3 = Question(
            3, "What country does this flag belong to?",
            R.drawable.ic_flag_of_belgium, "Berlin", "France", "Portugal", "Belgium", 1
        )
        val q4 = Question(
            4, "What country does this flag belong to?",
            R.drawable.ic_flag_of_germany, "Czechia", "Austria", "Germany", "Italy", 1
        )

        questionsList.add(q1)
        questionsList.add(q2)
        questionsList.add(q3)
        questionsList.add(q4)

        return questionsList
    }

}