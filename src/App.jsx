import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import AllReviews from './components/AllReviews'


function App() {

  return (
    <>
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<AllReviews />}></Route>
    </Routes>
    </>
  )
}

export default App
