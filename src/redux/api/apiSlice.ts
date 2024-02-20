import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GameConfiguration, QuestionData } from '../../types/types.ts'
import { ANY_DIFFICULTY, ANY_ID, ANY_TYPE } from '../../data/FormData.tsx'

interface QuizRequest {
  questionsAmount: number
  categoryId?: string | number
  difficulty?: Pick<GameConfiguration, 'difficulty'>['difficulty']
  type?: Pick<GameConfiguration, 'type'>['type']
}

interface QuizResponse {
  response_code: number
  results: QuestionData[]
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/api_category.php'
    }),
    getQuiz: builder.query<QuizResponse, QuizRequest>({
      query: ({ questionsAmount, categoryId, difficulty, type }) => {
        let query = `api.php?amount=${questionsAmount}`

        if (categoryId && categoryId !== ANY_ID) query += `&category=${categoryId}`
        if (difficulty && difficulty !== ANY_DIFFICULTY) query += `&difficulty=${difficulty}`
        if (type && type !== ANY_TYPE) query += `&type=${type}`

        return query
      }
    })
  }),
  keepUnusedDataFor: 0
})

export const { useGetCategoriesQuery, useGetQuizQuery } = apiSlice
