import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AllReviews from "./components/AllReviews";
import SingleReview from "./components/SingleReview";
import Login from "./components/Login";
import { useState } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<AllReviews />}></Route>
          <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
