import './App.css'
import './styles/normalize.css'

import { Layout } from './components/Layout/Layout.tsx'
// import { Welcome } from './pages/Welcome.tsx'
// import { Game } from './pages/Game.tsx'
import { GameData } from './types/types.ts'
// import { mockQuestionsMultiple } from './data/quizData.ts'
import Results from './pages/Results.tsx'

const mockData: GameData = {
  difficulty: 'Medium',
  type: 'Any type',
  questionsAmount: 10,
  category: 'Films',
  time: 5
}

function App() {
  return (
    <Layout>
      {/*<Welcome />*/}
      {/*<Game data={mockData} questions={mockQuestionsMultiple} />*/}
      <Results data={mockData} />
    </Layout>
  )
}

export default App
