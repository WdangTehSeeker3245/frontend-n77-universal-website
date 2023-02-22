import { Component } from 'react'
import FaizalRebahan from '../../assets/repair/faizal_ozeroki.jpg'

export default class TechGeek extends Component {
  render() {
    return (
      <div className="repair-con">
        <h2 className="uppercase text-center font-semibold text-xl mb-3 text-stone-300">Tech Geek</h2>
        <hr className="my-3" />
        <div className="grid grid-rows-3 grid-flow-col gap-2 font-bold uppercase repairer-con">
          <div className="row-span-3"><img src={FaizalRebahan} className="repairer-img" alt="Faizal Rebahan" /></div>
          <div className="col-span-2">
            <br /> 
            Faizal Nurul Firdaus (24)
            <br />
            <hr className="linetechgeek" />
            <div className="row-span-3 "><img src={FaizalRebahan} className="repairer-img-mobile" alt="Faizal Rebahan" /></div>
          </div>
          <div className="row-span-2 col-span-2 ">
            <a href="#" className="text-slate-200 bg-stone-500 px-2 py-2 rounded">#Software_Engineer</a>
            <br /><br />
            <span className="my-3">Skills     :<br /><div className="container-sm">Linux, Windows, C++, Go, C#, PHP, NET, Ruby, Java, Javascript, Python, Kotlin</div></span> 
            <br />
            <span className="my-3">Portofolio :</span>  <span className="portofolio"><a href="https://faizalnf-community-portofolio.vercel.app/" className="text-blue-600">Community Portofolio</a></span>
            <br /><br />
          </div>
        </div>
      </div>
    )
  }
}
