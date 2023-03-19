import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals,action, comedy, romance  } from './Urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='NETFLIX ORIGINALS' />
      <RowPost  url={action} title='ACTION MOVIES' isSmall />
      <RowPost  url={comedy} title='COMEDY MOVIES' isSmall />
      <RowPost  url={romance} title='ROMANTIC MOVIES' isSmall />

      
    </div>
  )
}

export default App;