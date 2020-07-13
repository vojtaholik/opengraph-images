/** @jsx jsx */
import {jsx, Global} from "@emotion/core"
import Textfit from "react-textfit"
import {render} from "react-dom"
import Twemoji from "react-twemoji"
import Design from "./design"

function App() {
  function imageBySlug(slug) {
    switch (slug) {
      case "react-eggheadtalks-setting-up-feature-flags-with-react":
        return "https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594636894/egghead%20talks/react-eggheadtalks-setting-up-feature-flags-with-react.png"
      case "react-native-eggheadtalks-lessons-learned-from-building-react-native-apps":
        return "https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594637550/egghead%20talks/react-native-eggheadtalks-lessons-learned-from-building-react-native-apps.png"
      default:
        return null
    }
  }
  return <Design />
}

render(<App />, document.getElementById("corgi"))
