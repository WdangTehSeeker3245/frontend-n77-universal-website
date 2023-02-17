import { Component } from 'react'
import '../styles/Header.sass'

export default class MyHeader extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    // this.linktoSection = this.linktoSection.bind(this);
  }

  // linktoSection() {
  //   // location = this.value;
  // }

  render() {
    return (
      <div className="header-hero">
        <br />
        <h1 className="header-title text-center font-bold text-orange-500 uppercase">Welcome To My Universal<br/> Sharing Site</h1>
        <hr style={{width:"100px",height:"20px"}} className="mx-auto"/>
        <div className="menu-con mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="my-3">
              <a href="#linux"><img className="menu-icon mx-auto" src="https://freepngimg.com/thumb/penguin/75896-tux-racer-linux-penguin-free-clipart-hq.png" alt="linux" /></a>
            </div>
            <div className="my-3">
              <a href="#application"><img className="menu-icon mx-auto" src="https://cdn-icons-png.flaticon.com/512/226/226904.png" alt="application" /></a>
            </div>
          </div>
          
          
        {/* <select value={status} onChange={this.linktoSection}  className="n77-menu form-select">
            <option value="linux">Linux</option>
            <option value="application">Application</option>
        </select> */}
        </div>
      </div>
    )
  }
}
