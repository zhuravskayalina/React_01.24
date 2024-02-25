export interface Category {
  id: string | number
  name: string
}

export type Difficulty = 'any' | 'easy' | 'medium' | 'hard'
export type Type = 'any' | 'multiple' | 'boolean'

export interface GameConfiguration {
  category: Category
  questionsAmount: number
  difficulty: Difficulty
  type: Type
  time: number
}

export interface QuestionData {
  type: Type
  difficulty: Difficulty
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
