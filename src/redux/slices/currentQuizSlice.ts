import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'

export interface QuestionStoreData {
  question: string
  correctAnswer: string
  userAnswer: string
}

interface currentQuizSliceState {
  questions: QuestionStoreData[]
  correctAnswers: number
  time: number
}

const initialState: currentQuizSliceState = {
  questions: [],
  correctAnswers: 0,
  time: 0
}

const currentQuizSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
    addQuestion(state, action: PayloadAction<QuestionStoreData>) {
      state.questions.push(action.payload)
    },
    increaseCorrectAnswers(state) {
      state.correctAnswers += 1
    },
    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload
    },
    resetCurrentQuizData(state) {
      Object.assign(state, initialState)
    }
  }
})

export const { addQuestion, setTime, increaseCorrectAnswers, resetCurrentQuizData } =
  currentQuizSlice.actions
export default currentQuizSlice.reducer
