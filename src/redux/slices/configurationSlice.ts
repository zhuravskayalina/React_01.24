import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  ANY_CATEGORY,
  ANY_DIFFICULTY,
  ANY_ID,
  ANY_TYPE,
  MIN_QUESTIONS_AMOUNT
} from '../../data/FormData.tsx'
import { Category, GameConfiguration } from '../../types/types.ts'

const initialState: GameConfiguration = {
  questionsAmount: MIN_QUESTIONS_AMOUNT,
  category: {
    id: ANY_ID,
    name: ANY_CATEGORY
  },
  difficulty: ANY_DIFFICULTY,
  type: ANY_TYPE,
  time: 1
}

export const configurationSlice = createSlice({
  name: 'gameConfiguration',
  initialState,
  reducers: {
    setQuestionsAmount(state, action: PayloadAction<number>) {
      state.questionsAmount = action.payload
    },
    setCategory(state, action: PayloadAction<Category>) {
      state.category = action.payload
    },
    setType(state, action: PayloadAction<Pick<GameConfiguration, 'type'>['type']>) {
      state.type = action.payload
    },
    setDifficulty(
      state,
      action: PayloadAction<Pick<GameConfiguration, 'difficulty'>['difficulty']>
    ) {
      state.difficulty = action.payload
    },
    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload
    },
    reset(state) {
      state = initialState
    }
  }
})

export const { setQuestionsAmount, setCategory, setType, setDifficulty, setTime, reset } =
  configurationSlice.actions
export default configurationSlice.reducer
