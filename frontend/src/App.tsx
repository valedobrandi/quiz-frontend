import { Route, Routes } from "react-router-dom"
import Main from "./pages/main"
import React from "react"
import Quiz from "./pages/quiz"
import Header from "./components/Header"

import SignIn from "./components/SingIn"
import Finish from "./pages/finish"

const App: React.FC = () => {
  return (
    <div className="max-w-[64rem] m-auto">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/finish' element={<Finish />} />
        <Route path='/singIn' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
