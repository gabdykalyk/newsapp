import React from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Header />
      <div className='container text-center'>
        <h1 className='mt-5'>
          Добро пожаловать на сайт Новостей
        </h1>
        <Link className="btn btn-primary mt-5" to={"/client"} >Показать все новости</Link>
      </div>
    </div>
  )
}

export default Main;