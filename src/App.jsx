


import { Line } from 'recharts'
import './App.css'
import NAvBar from './components/NavBar/NAvBar'
import PriceOption from './components/PriceOption/PriceOption'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
    <NAvBar></NAvBar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <PriceOption></PriceOption>
    <LineChart></LineChart>
    <Phones></Phones>
      
    </>
  )
}

export default App
