import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import warPhoto from '../../Old/wars.png'
import lecternPhoto from '../../Old/lectern.png'
import Header from './components/Header.jsx'
import Article from './components/Article.jsx'
import Breaking from './components/Breaking.jsx'

import './App.css'

function App() {
  return (
    <>
      <div>
        <Header />
        <Breaking />
        <Article />
      </div>
    </>
  )
}

export default App
