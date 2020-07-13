/** @jsx jsx */
import React from "react"
import {jsx, Global} from "@emotion/core"
import Textfit from "react-textfit"
import Twemoji from "react-twemoji"

const Design = () => {
  return (
    <div
      css={{
        width: 1280,
        height: 720,
        background: `rgb(255, 255, 255)`,
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
          sdsd
          <Twemoji options={{className: "emoji", folder: "svg", ext: ".svg"}}>
            {window.title}
          </Twemoji>
        </Textfit>
      </h1>
    </div>
  )
}

export default Design
