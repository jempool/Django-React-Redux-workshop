import React from "react"

import Headline from "../Headline"

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>App de prueba!</Headline>
          </div>
        </div>
      </div>
    )
  }
}