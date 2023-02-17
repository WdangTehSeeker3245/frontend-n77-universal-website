import { Component } from 'react'
import '../styles/Home.sass'
import MyHeader from '../components/MyHeader'

import Linux from '../components/software-engineer/Linux'
import Application from '../components/software-engineer/Application'
import Opening from '../components/entertainment/OpeningAnime'

export default class Home extends Component {
  render() {
    return (
      
      <div>
        <MyHeader/>
        <br/>
        <Opening/>
        <br />
        <Linux/>
        <br/>
        <Application/>
      </div>
    )
  }
}
