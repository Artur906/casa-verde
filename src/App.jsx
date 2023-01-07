import HomePage from './pages/HomePage'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 100rem;
  margin: auto;
`

function App() {
  return (
    <Container >
      <HomePage />
    </Container>
  )
}

export default App
