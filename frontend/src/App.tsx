import { Route, Routes } from "react-router-dom"
import TheQuiz from "./pages/theQuiz"
import React from "react"

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<TheQuiz />} />
    </Routes>
  )
}

export default App
