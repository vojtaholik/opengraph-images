/** @jsx jsx */
import React from "react"
import {jsx, Global} from "@emotion/core"
import Textfit from "react-textfit"
import Twemoji from "react-twemoji"

const Design = () => {
  const window = {
    title: "react-eggheadtalks-setting-up-feature-flags-with-react",
  }

  function imageBySlug(slug) {
    switch (slug) {
      case "react-eggheadtalks-setting-up-feature-flags-with-react":
        return "https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594636894/egghead%20talks/react-eggheadtalks-setting-up-feature-flags-with-react.png"
      case "react-native-eggheadtalks-lessons-learned-from-building-react-native-apps":
        return "https://res.cloudinary.com/dg3gyk0gu/image/upload/v1594636891/egghead%20talks/react-native-eggheadtalks-lessons-learned-from-building-react-native-apps.png"
      default:
        return null
    }
  }

  return (
    <div
      css={{
        width: 1280,
        height: 720,
        background: `rgb(255, 255, 255)`,
        border: "1px solid black",
        position: "absolute",
        display: "flex",
        overflow: "hidden",
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

      <h1
        css={{
          color: "red",
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
          }}
        >
          {/* <Twemoji options={{className: "emoji", folder: "svg", ext: ".svg"}}>
            {window.title}
          </Twemoji> */}

          <img src={imageBySlug(window.title)} />
        </Textfit>
      </h1>
    </div>
  )
}

export default Design
