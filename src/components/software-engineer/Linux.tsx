import { Component } from 'react'
import { Card,Button } from 'flowbite-react'

import ImgUbuntu from '../../assets/linux/ubuntu.png'
import ImgFedora from '../../assets/linux/fedora.png'
import ImgDebian from '../../assets/linux/debian.png'
import ImgEndevour from '../../assets/linux/endevour.png'
import ImgArchlinux from '../../assets/linux/archlinux.png'

export default class Linux extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.linkXubuntu = this.linkXubuntu.bind(this);
    this.linkFedora = this.linkFedora.bind(this);
    this.linkDebian = this.linkDebian.bind(this);
    this.linkEndevour = this.linkEndevour.bind(this);
    this.linkArchlinux = this.linkArchlinux.bind(this);
  }

  linkXubuntu() {
    window.location.replace("http://ubuntutym2.u-toyama.ac.jp/xubuntu/22.04/release/")
  }

  linkFedora() {
    window.location.replace("https://spins.fedoraproject.org/lxqt/download/index.html")
  }

  linkDebian() {
    window.location.replace("https://linuxmint.com/download_lmde.php")
  }

  linkEndevour() {
    window.location.replace("https://endeavouros.com/latest-release/")
  }

  linkArchlinux() {
    window.location.replace("https://archlinux.org/download/")
  }

  render() {
    return (
      <div id="linux" className="linux-con">
        <h2 className="uppercase text-center font-semibold text-xl mb-3 text-stone-300">Linux Share</h2>
        <hr className="my-3" />
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">

          <div className="my-3">
            <Card style={{backgroundColor:"#FFCC00",border:"none",borderRadius:"0px"}}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                Fedora LXQT 
                </h5>
                <img src={ImgFedora} className="item-logo" alt="Logo Ubuntu" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Testing and Lead Linux Distro Sponsored by Red Hat. Actively Maintained by Linus Torval. Most updated and secure Linux for desktops and workstations. But it requires more effort and tools to make it a server rather than rocky Linux. 
                </p>
                <Button onClick={this.linkFedora} style={{backgroundColor:"#FF9900",borderRadius:"0px"}}>
                Download
                <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </Button>
            </Card>
            </div>

            <div className="my-3">
            <Card style={{backgroundColor:"#FFCC00",border:"none",borderRadius:"0px"}}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                Linux Mint Debian Edition/LMDE
                </h5>
                <img src={ImgDebian} className="item-logo" alt="Logo Ubuntu" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Linux Mint secondary project that prepared to replace dependency against Ubuntu development policy. it says future Linux Mint is not based on ubuntu anymore, and harder to customize or hardened rock operating system. hardened rock mean it is not too secure, but still have minimal cyber defence for new Linux user. 
                </p>
                <Button onClick={this.linkDebian} style={{backgroundColor:"#FF9900",borderRadius:"0px"}}>
                Download
                <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </Button>
            </Card>
            </div>

            <div className="my-3">
            <Card style={{backgroundColor:"#FFCC00",border:"none",borderRadius:"0px"}}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                Endevour OS
                </h5>
                <img src={ImgEndevour} className="item-logo" alt="Logo Ubuntu" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Terminal Centric Linux that based on Arch Linux and maintained by remain of Antergos Project Team. 
                </p>
                <Button onClick={this.linkEndevour} style={{backgroundColor:"#FF9900",borderRadius:"0px"}}>
                Download
                <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </Button>
            </Card>
            </div>

            

            <div className="my-3">
            <Card style={{backgroundColor:"#FFCC00",border:"none",borderRadius:"0px"}}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                Ubuntu XFCE/Xubuntu
                </h5>
                <img src={ImgUbuntu} className="item-logo" alt="Logo Ubuntu" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Branch of Debian Linux Distribution Sponsored by Canonical. Known for it user-friendly and keeping up pace with developer channel requirements
                </p>
                <Button onClick={this.linkXubuntu} style={{backgroundColor:"#FF9900",borderRadius:"0px"}}>
                Download
                <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </Button>
            </Card>
            </div>

            <div className="my-3">
            <Card style={{backgroundColor:"#FFCC00",border:"none",borderRadius:"0px"}}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                Arch linux
                </h5>
                <img src={ImgArchlinux} className="item-logo" alt="Logo Ubuntu" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Linux inspired by CRUX simplicity and Gentoo Linux modularity. a sword that is good as a sandbox and boxing ground for lab geek guys in a virtual world. freedom of customization in another way besides Void Linux and GNU Linux.
                </p>
                <Button onClick={this.linkArchlinux} style={{backgroundColor:"#FF9900",borderRadius:"0px"}}>
                Download
                <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </Button>
            </Card>
            </div>
        </div>
      </div>    
    )
  }
}
