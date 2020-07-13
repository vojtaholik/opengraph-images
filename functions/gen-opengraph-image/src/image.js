/** @jsx jsx */
import React from "react"
import {render} from "react-dom"
import {jsx, Global} from "@emotion/core"
import Design from "../../../src/components/design"

function App() {
  return <Design />
}

render(<App />, document.getElementById("corgi"))
