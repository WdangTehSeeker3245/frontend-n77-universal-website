import React, { Component } from 'react'

export default class OpeningAnime extends Component {
  render() {
    return (
        <figure className="cinema-frame mx-auto bg-slate-200">
            <iframe className="mx-auto py-4" width="85%" height="380" src="https://www.youtube.com/embed/ikDUViSBe8I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </figure>
    )
  }
}
