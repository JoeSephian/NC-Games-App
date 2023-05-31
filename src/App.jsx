import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import AllReviews from './components/AllReviews'
import SingleReview from './components/SingleReview'


function App() {

  return (
    <>
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<AllReviews />}></Route>
      <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
    </Routes>
    </>
  )
}

export default App
