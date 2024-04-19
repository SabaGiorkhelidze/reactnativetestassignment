import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

export const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list' >დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
