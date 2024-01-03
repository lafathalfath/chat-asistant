import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Chat from './pages/Chat'
import NotFound from './pages/404'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path='/chat' element={<Chat/>}/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
