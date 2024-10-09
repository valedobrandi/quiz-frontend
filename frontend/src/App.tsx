import { Route, Routes } from "react-router-dom"
import Main from "./pages/main"
import React, { useReducer } from "react"
import Quiz from "./pages/quiz"
import Header from "./components/Header"

import SignIn from "./components/SingIn"
import Finish from "./pages/finish"
import reducer from "./reducer"
import { initialState } from "./reducer/store"

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="max-w-[64rem] m-auto">
      <Header username={state.username} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/finish' element={<Finish />} />
        <Route path='/singIn' element={<SignIn dispatch={dispatch} />} />
      </Routes>
    </div>
  )
}

export default App
