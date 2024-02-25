import { GameConfiguration, QuestionData } from '../types/types.ts'

export const mockData: GameConfiguration = {
  difficulty: 'medium',
  type: 'any',
  questionsAmount: 10,
  category: { id: 1, name: 'Films' },
  time: 5
}

export const mockQuestionsMultiple: QuestionData[] = [
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'By what name was the author Eric Blair better known?',
    correct_answer: 'George Orwell',
    incorrect_answers: ['Aldous Huxley', 'Ernest Hemingway', 'Ray Bradbury']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'Who is the author of the series "Malazan Book of the Fallen"?',
    correct_answer: 'Steven Erikson',
    incorrect_answers: ['Ian Cameron Esslemont', 'George R. R. Martin', 'J. R. R. Tolkien']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'What book series published by Jim Butcher follows a wizard in modern day Chicago?',
    correct_answer: 'The Dresden Files',
    incorrect_answers: ['A Hat in Time', 'The Cinder Spires', 'My Life as a Teenage Wizard']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question:
      'What was the name of the Mysterious Island, in Jules Verne&#039;s "The Mysterious Island"?',
    correct_answer: 'Lincoln Island',
    incorrect_answers: ['Vulcania Island', 'Prometheus Island', 'Neptune Island']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question:
      'Which novel by John Grisham was conceived on a road trip to Florida while thinking about stolen books with his wife?',
    correct_answer: 'Camino Island',
    incorrect_answers: ['Rogue Lawyer', 'Gray Mountain', 'The Litigators']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question:
      'In Michael Crichton&#039;s novel "Jurassic Park", John Hammond meets his demise at the claws of which dinosaur?',
    correct_answer: 'Procompsognathus',
    incorrect_answers: ['Dilophosaurus', 'Tyrannosaurus Rex', 'Velociraptor']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'What position does Harry Potter play in Quidditch?',
    correct_answer: 'Seeker',
    incorrect_answers: ['Beater', 'Chaser', 'Keeper']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question:
      'J.K. Rowling completed "Harry Potter and the Deathly Hallows" in which hotel in Edinburgh, Scotland?',
    correct_answer: 'The Balmoral',
    incorrect_answers: ['The Dunstane Hotel', 'Hotel Novotel', 'Sheraton Grand Hotel &amp; Spa']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'In Alice in Wonderland, what is the name of Alice&#039;s kitten?',
    correct_answer: 'Dinah',
    incorrect_answers: ['Oscar', 'Heath', 'Smokey']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question:
      'Which American author was also a budding travel writer and wrote of his adventures with his dog Charley?',
    correct_answer: 'John Steinbeck',
    incorrect_answers: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'William Faulkner']
  }
]
