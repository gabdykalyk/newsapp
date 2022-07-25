import React from "react"
import { Route, Routes } from 'react-router-dom'
import Article from "./Article/Article"
import Articles from "./Articles/Articles"

const App = () => {
  return (
    <Routes>
      <Route path='/client/' element={<Articles />} />
      <Route path='/client/:id' element={<Article />} />
    </Routes>
  )
}

export default App;