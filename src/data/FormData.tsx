export const MIN_QUESTIONS_AMOUNT = 15
export const MAX_QUESTIONS_AMOUNT = 50
export const ANY_CATEGORY = 'Any Category'
export const ANY = 'any'

export const EASY_DIFFICULTY = 'easy'
export const MEDIUM_DIFFICULTY = 'medium'
export const HARD_DIFFICULTY = 'hard'

export const MULTIPLE_OPTION = 'multiple'
export const BOOLEAN_OPTION = 'boolean'

export type Option = {
  id: string | number
  name: string | number
}

export const difficultyOptions = [
  { id: ANY, name: 'Any difficulty' },
  { id: EASY_DIFFICULTY, name: 'Easy' },
  { id: MEDIUM_DIFFICULTY, name: 'Medium' },
  { id: HARD_DIFFICULTY, name: 'Hard' }
]

export const typeOptions = [
  { id: ANY, name: 'Any type' },
  { id: MULTIPLE_OPTION, name: 'Multiple Choice' },
  { id: BOOLEAN_OPTION, name: 'True/False' }
]

export const timeOptions = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 5 }
]
