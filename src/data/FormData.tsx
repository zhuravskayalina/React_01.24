export const MIN_QUESTIONS_AMOUNT = 15
export const MAX_QUESTIONS_AMOUNT = 50
export const ANY_CATEGORY = 'Any Category'
export const ANY_ID = 'any'
export const ANY_DIFFICULTY = 'Any Difficulty'
export const ANY_TYPE = 'Any Type'

export type Option = {
  id: string | number
  name: string | number
}

export const difficultyOptions = [
  { id: 1, name: ANY_DIFFICULTY },
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' }
]

export const typeOptions = [
  { id: ANY_ID, name: ANY_TYPE },
  { id: 'multiple', name: 'Multiple Choice' },
  { id: 'boolean', name: 'True/False' }
]

export const timeOptions = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 5 }
]
