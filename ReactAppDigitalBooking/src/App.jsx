import './index.css'
import Header from './Components/Header'
import Home from '../src/Routes/Home'
import LogIn from './Routes/LogIn'
import CreateAcc from './Routes/CreateAcc'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Search from './Components/Search'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/createacc' element={<CreateAcc/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
