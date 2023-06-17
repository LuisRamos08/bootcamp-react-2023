import {Routes, Route} from 'react-router-dom'

import './App.css'
import Layout from './components/layout/Layout'
import UsersPage from './pages/users/UsersPage'
import UserDetail from './components/users/UserDetail'

const Welcome = ()=><h1>Bienvenidos</h1>

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Welcome/>}  />
        <Route path='/users' element={<UsersPage/>}  />
        <Route path='/users/:id' element={<UserDetail/>}  />
      </Routes>
    </Layout>
  )
}

export default App
