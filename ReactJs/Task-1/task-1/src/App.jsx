import './App.css'
import Movies from './components/Movies'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [userName] = useState('Mohamed Khaled')
  return (
    <>
      <Movies></Movies>
      <Footer userName={userName}></Footer>
    </>
  )
}

export default App
