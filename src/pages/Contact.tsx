import { Component } from 'react'
import TechGeek from '../components/hardware-engineer/TechGeek'
import ITsupport from '../components/hardware-engineer/ITsupport'
import Technician from '../components/hardware-engineer/Technician'

import '../styles/Repair.sass'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <br />
        <TechGeek/>
        <br />
        <ITsupport/>
        <br />
        <Technician/>
      </div>
    )
  }
}
