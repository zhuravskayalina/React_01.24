import { Option } from '../data/FormData.tsx'

export interface Category {
  id: string | number
  name: string
}

export interface GameConfiguration {
  category: Category
  questionsAmount: number
  difficulty: 'any' | 'easy' | 'medium' | 'hard'
  type: 'any' | 'multiple' | 'boolean'
  time: number
}

export interface QuestionData {
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface CategoriesResponse {
  trivia_categories: Option[]
}
