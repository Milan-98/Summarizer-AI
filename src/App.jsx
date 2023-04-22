import React from 'react'
import Header from './Components/Header';
import Demo from './Components/Demo';

const App = () => {
  return (
    <main>
    <div className='main'>
      <div className='gradient' />
    </div>

    <div className='app'>
      <Header />
      <Demo />
    </div>
  </main>
  )
}

export default App;