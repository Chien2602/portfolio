import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Education from './components/Education'

export default function App() {
  return (
    <div className='bg-[url(./assets/image/background.png)] bg-cover bg-center bg-fixed'>
      <Header />
      <Home />
      <Skill />
      <Project />
      <Contact />
      <Education />
    </div>
  )
}
