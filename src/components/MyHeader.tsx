import { Component } from 'react'
import '../styles/Header.sass'
import LinuxBird from '../assets/icon/linux-bird.png'
import Application from '../assets/icon/application.png';

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
              <a href="#linux"><img className="menu-icon mx-auto" src={LinuxBird} alt="linux" /></a>
            </div>
            <div className="my-3">
              <a href="#application"><img className="menu-icon mx-auto" src={Application} alt="application" /></a>
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
