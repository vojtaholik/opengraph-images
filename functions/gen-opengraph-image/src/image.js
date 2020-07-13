/** @jsx jsx */
import {jsx, Global} from "@emotion/core"
import Textfit from "react-textfit"
import {render} from "react-dom"
import Twemoji from "react-twemoji"
import Design from "./design"

function App() {
  return <Design />
}

render(<App />, document.getElementById("corgi"))
