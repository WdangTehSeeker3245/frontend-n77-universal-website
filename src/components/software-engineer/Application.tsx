import { Component } from 'react'
import '../../styles/Application.sass'

import VsCode from '../../assets/application/vscode.png'
import FlatHub from '../../assets/application/flathub.png'
import FirefoxDev from '../../assets/application/firefox-dev.png'
import ChromeDev from '../../assets/application/chrome-dev.png'
import MsEdge from '../../assets/application/ms-edge.png'
import MonoDev from '../../assets/application/monodevelop.png'
import QtCreator from '../../assets/application/qt-creator.png'
import Veracrypt from '../../assets/application/veracrypt.png'

export default class Application extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.linkVscode = this.linkVscode.bind(this);
    this.linkFlathub = this.linkFlathub.bind(this);
    this.linkFirefoxDev = this.linkFirefoxDev.bind(this);
    this.linkChromeDev = this.linkChromeDev.bind(this);
    this.linkMsEdge = this.linkMsEdge.bind(this);
    this.linkMonoDev = this.linkMonoDev.bind(this);
    this.linkQtCreator = this.linkQtCreator.bind(this);
    this.linkVeracrypt= this.linkVeracrypt.bind(this);
  }

  linkVscode() {
    window.location.replace("https://code.visualstudio.com/Download")
  }

  linkFlathub() {
    window.location.replace("https://flatpak.org/setup/")
  }

  linkFirefoxDev() {
    window.location.replace("https://www.mozilla.org/id/firefox/developer/")
  }

  linkChromeDev() {
    window.location.replace("https://www.google.com/intl/id/chrome/dev/")
  }

  linkMsEdge() {
    window.location.replace("https://www.microsoft.com/id-id/edge")
  }

  linkMonoDev() {
    window.location.replace("https://www.monodevelop.com/download/")
  }

  linkQtCreator() {
    window.location.replace("https://web.stanford.edu/dept/cs_edu/resources/qt/install-linux")
  }

  linkVeracrypt() {
    window.location.replace("https://www.veracrypt.fr/en/Downloads.html")
  }

  render() {
    return (
      <div id="application" className="application-con">
        <h2 className="uppercase text-center font-semibold text-xl mb-3 text-stone-300">Application Share</h2>
        <hr className="my-3" />
        <div onClick={this.linkVscode} className="item-app-list mx-auto my-2">
          <img className="item-app-icon" src={VsCode} alt="vscode icon" />
          <p className="item-app-label">Vscode</p>
        </div>
        <div onClick={this.linkFlathub} className="item-app-list mx-aut my-2">
          <img className="item-app-icon" src={FlatHub} alt="vscode icon" />
          <p className="item-app-label">Flathub Store</p>
        </div>
        <div onClick={this.linkFirefoxDev} className="item-app-list mx-auto my-2">
          <img className="item-app-icon" src={FirefoxDev} alt="vscode icon" />
          <p className="item-app-label">Firefox for Developer</p>
        </div>
        <div onClick={this.linkChromeDev} className="item-app-list mx-auto my-2">
          <img className="item-app-icon" src={ChromeDev} alt="vscode icon" />
          <p className="item-app-label">Chrome for Developer</p>
        </div>
        <div onClick={this.linkMsEdge} className="item-app-list mx-auto my-2">
          <img className="item-app-icon" src={MsEdge} alt="vscode icon" />
          <p className="item-app-label">Microsoft Edge</p>
        </div>
        <div onClick={this.linkMonoDev} className="item-app-list mx-auto my-2">
          <img className="item-app-icon" src={MonoDev} alt="vscode icon" />
          <p className="item-app-label">Mono Develop IDE</p>
        </div>
        <div onClick={this.linkQtCreator} className="item-app-list mx-auto my-2">
          <img className="item-app-icon" src={QtCreator} alt="vscode icon" />
          <p className="item-app-label">Qt Creator</p>
        </div>
        <div onClick={this.linkVeracrypt} className="item-app-list mx-auto my-2">
          <img className="item-app-icon" src={Veracrypt} alt="vscode icon" />
          <p className="item-app-label">Veracrypt</p>
        </div>
      </div>
       
    )
  }
}
