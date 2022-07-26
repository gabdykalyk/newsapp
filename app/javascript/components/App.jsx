import React from "react"
import { Route, Routes } from 'react-router-dom'
import Main from "./ Main/Main"
import Article from "./Article/Article"
import Articles from "./Articles/Articles"
import ErrorPage from "./Error/Error"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/client/' element={<Articles />} />
      <Route path='/client/:id' element={<Article />} />
    </Routes>
  )
}

export default App;