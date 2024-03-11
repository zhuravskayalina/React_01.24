import { render, screen } from '@testing-library/react'
import { Welcome } from '../pages/Welcome.tsx'
import { store } from '../redux/store.tsx'
import { Provider } from 'react-redux'

describe('Welcome page', () => {
  it('renders properly', () => {
    render(
      <Provider store={store}>
        <Welcome />
      </Provider>
    )
    expect(screen.getByTestId('welcome-heading')).toBeInTheDocument()
  })
})
