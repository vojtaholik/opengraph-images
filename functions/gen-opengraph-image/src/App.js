import React from "react"
import Design from "./design"

export default function App() {
  return (
    <div className="App" style={{}}>
      {/* <div>Your Image:</div> */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Design />
      </div>
    </div>
  )
}
