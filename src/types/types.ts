export interface GameData {
  category: string
  questionsAmount: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  type: 'Any type' | 'Multiple choice' | 'True/False'
  time: number
}

export interface CurrentGameData {}

export interface Question {
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
