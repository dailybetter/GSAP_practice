import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { IntroPage } from './pages/intro'
import { YoyoPage } from './pages/yoyo'
function App() {


  return (
    <div className="App">
      {/* <IntroPage /> */}
      <YoyoPage />
    </div>
  )
}

export default App
