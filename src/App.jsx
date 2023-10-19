import { useState } from 'react'
import './App.css'
import data from '../data.json'
import Build from './MyComponents/building';

function App() {
  return (
    <>
      <div className='container'>
        {
          data.map(item => <Build 
            mainP={item.mainImg}
            tittle={item.tittle}
            subH={item.subheading}
            desc={item.description}
            miniP={item.miniImg}
            miniH={item.mininHeading}
            time={item.time}
          />)
        }
      </div>
    </>
  )
}

export default App;
