import { Stack, Container } from '@chakra-ui/react'
import Navbar from './components/ui/navbar'
import TodoForm from './components/ui/todo-form'
import TodoList from './components/ui/todo-list'

export const BASE_URL = import.meta.env.MODE === "development" ? 'http://localhost:5000/api' : "/api"

function App() {

  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  )
}

export default App
