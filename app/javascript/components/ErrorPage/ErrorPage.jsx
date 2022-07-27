import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return(
    <div className="container text-center mt-5">
      <h1>Страница не найдена</h1>
      <h1>404</h1>
      <Link to={'/client'} className="btn btn-primary">Вернуться на главную</Link>
    </div>
  )
}

export default ErrorPage;