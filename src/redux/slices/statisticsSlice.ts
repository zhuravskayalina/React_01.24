import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  BOOLEAN_OPTION,
  EASY_DIFFICULTY,
  HARD_DIFFICULTY,
  MEDIUM_DIFFICULTY,
  MULTIPLE_OPTION
} from '../../data/FormData.tsx'
import { QuestionData } from '../../types/types.ts'

type StatisticsByCategory = { [key: string]: number }

interface Statistics {
  total: number
  correct: number
  byCategory: StatisticsByCategory
  byDifficulty: {
    easy: number
    medium: number
    hard: number
  }
  byType: {
    boolean: number
    multiple: number
  }
}

const initialState: Statistics = {
  total: 0,
  correct: 0,
  byCategory: {},
  byDifficulty: {
    easy: 0,
    medium: 0,
    hard: 0
  },
  byType: {
    boolean: 0,
    multiple: 0
  }
}

type QuestionInfo = Pick<QuestionData, 'type' | 'difficulty' | 'category'>

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    increaseTotal(state) {
      state.total += 1
    },
    increaseCorrect(state) {
      state.correct += 1
    },
    addInfo(state, action: PayloadAction<QuestionInfo>) {
      if (!state.byCategory[action.payload.category]) {
        state.byCategory[action.payload.category] = 0
      }
      state.byCategory[action.payload.category] += 1

      switch (action.payload.difficulty) {
        case EASY_DIFFICULTY:
          state.byDifficulty.easy += 1
          break
        case MEDIUM_DIFFICULTY:
          state.byDifficulty.medium += 1
          break
        case HARD_DIFFICULTY:
          state.byCategory.hard += 1
      }

      switch (action.payload.type) {
        case MULTIPLE_OPTION:
          state.byType.multiple += 1
          break
        case BOOLEAN_OPTION:
          state.byType.boolean += 1
      }
    }
  }
})

export const { increaseTotal, increaseCorrect, addInfo } = statisticsSlice.actions

export default statisticsSlice.reducer
