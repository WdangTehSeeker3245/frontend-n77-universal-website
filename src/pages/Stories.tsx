import { Component } from 'react'
import ComingSoon from '../components/ComingSoon'

export default class Stories extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center uppercase font-bold text-slate-200">Stories Page</h2>
        <ComingSoon/>
      </div>
    )
  }
}
