import './App.css'
import Header from './Components/Header'
import {Route, Routes} from 'react-router-dom'
import Home from '../src/Routes/Home'
import LogIn from '../src/Routes/LogIn'
import CreateAcc from '../src/Routes/CreateAcc'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/LogIn' element={<LogIn/>}/>
          <Route path='/CreateAcc' element={<CreateAcc/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
