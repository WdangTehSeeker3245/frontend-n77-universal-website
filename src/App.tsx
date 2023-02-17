import { Component } from 'react'
import { Routes, Route} from "react-router-dom"

import MyNavbar from './components/MyNavbar'

import Home from './pages/Home'
import Design from './pages/Design'
import Stories from './pages/Stories'
import Contact from './pages/Contact'

export default class App extends Component {
  render() {
    return (
      <div className='MyApp'>
        <MyNavbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/original-character" element={<Design />} />
          <Route path="/multi-lang-stories" element={<Stories />} />
          <Route path="/contact-repair" element={<Contact />} />
        </Routes>

      </div>
    )
  }
}

