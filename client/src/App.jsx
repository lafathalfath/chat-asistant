import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Chat from './pages/Chat'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path='/chat' element={<Chat/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
