import { Component,ReactNode } from 'react'
import { Navbar } from 'flowbite-react'

import Logo from '../assets/N77.png'

import { Link, useMatch, useResolvedPath } from "react-router-dom"


declare namespace JSX {
  interface Props {
    children?: ReactNode;
    to?:any;
    className?:any;
  }
}


export default class MyNavbar extends Component {
  render() {
    return (
      <div>
      <Navbar
      fluid={true}
      rounded={false}
      style={{backgroundColor:"#57534e",color:"white"}}
      >
      
      <Link to="/" className="site-title">
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src={Logo}
            className="mr-3 h-6 sm:h-9"
            alt="Site Logo"
            />
            <span style={{textShadow:"2px 1px 2px white"}} className="self-center whitespace-nowrap md:text-xl font-semibold text-red-600 font-bold">
              N77 Universal Sharing Site
            </span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
          <Link to="/" className="site-title">
              <Navbar.Link
              href="/navbars"
              active={true}
              style={{color:"yellow"}}
              >
              Home
              </Navbar.Link>
          </Link>
          <CustomLink to="/original-character">
              <Navbar.Link style={{color:"orange"}} href="/navbars">
              Original Character
              </Navbar.Link>
          </CustomLink>
          <CustomLink to="/multi-lang-stories">
              <Navbar.Link style={{color:"orange"}} href="/navbars">
              Universal Language Stories
              </Navbar.Link>
          </CustomLink>
          <CustomLink to="/contact-repair">
              <Navbar.Link style={{color:"orange"}} href="/navbars">
              Contact Repair
              </Navbar.Link>
          </CustomLink>
      </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}



function CustomLink({to, children, ...props }:JSX.Props){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}