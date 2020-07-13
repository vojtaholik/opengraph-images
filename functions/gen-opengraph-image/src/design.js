/** @jsx jsx */
import {jsx, Global} from "@emotion/core"
import Textfit from "react-textfit"
import {render} from "react-dom"
import Twemoji from "react-twemoji"
import queryString from "querystring"

const Design = ({props}) => {
  const params = queryString.parse(window.location.search)
  const urlParams = new URLSearchParams(window.location.search)
  const title = urlParams.get("title")
  //   console.log(urlParams.get("title"))
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
  return (
    <div
      css={{
        width: 1280,
        height: 720,
        background: "rgb(255, 255, 255)",
        position: "absolute",
        display: "flex",
        overflow: "hidden",
        // left: 0,
        // top: 0,
      }}
    >
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "system-ui",
          },
          ".emoji": {
            height: "1em",
            width: "1em",
            margin: "0 .05em 0 .1em",
            verticalAlign: "-0.1em",
          },
        }}
      />

      <img
        style={{width: "100%", position: "absolute"}}
        src={imageBySlug(window.title || title)}
      />
      <h1
        css={{
          color: "white",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Textfit
          max={256}
          min={24}
          style={{
            minHeight: "80%",
            maxHeight: "80%",
            lineHeight: 1,
            position: "absolute",
          }}
        >
          <Twemoji options={{className: "emoji", folder: "svg", ext: ".svg"}}>
            {window.title || title}
          </Twemoji>
        </Textfit>
      </h1>
    </div>
  )
}

export default Design
