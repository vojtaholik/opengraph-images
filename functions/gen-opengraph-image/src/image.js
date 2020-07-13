/** @jsx jsx */
import {jsx, Global} from '@emotion/core'
import Textfit from 'react-textfit'
import {render} from 'react-dom'
import Twemoji from 'react-twemoji'

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        background: `rgb(255, 20, 147)`,
        position: 'absolute',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            fontFamily: 'system-ui',
          },
          '.emoji': {
            height: '1em',
            width: '1em',
            margin: '0 .05em 0 .1em',
            verticalAlign: '-0.1em',
          },
        }}
      />
      <div
        css={{
          background: '#041016',
          margin: '40px',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'end',
          borderRadius: 10,
          padding: '8rem',
          boxShadow: `inset 3px 3px 21px 2px rgba(251,17,146,1)`,
        }}
      >
        <h1
          css={{
            color: '#E9F5FB',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <Textfit
            max={256}
            min={24}
            style={{
              minHeight: '80%',
              maxHeight: '80%',
              lineHeight: 1,
            }}
          >
            <Twemoji options={{className: 'emoji', folder: 'svg', ext: '.svg'}}>
              {window.title}
            </Twemoji>
          </Textfit>
        </h1>
        <div
          css={{
            color: 'white',
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'space-between',
            fontSize: 36,
            margin: '-5rem',
            paddingTop: '3rem',
          }}
        >
          <div></div>
          <div css={{width: '90px', height: '90px', paddingTop: '2rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.38 488.18">
              <title>jh_logo</title>
              <path
                fill="#000000"
                stroke="none"
                d="M224.25,13.18c-56.5,8-106.6,33.5-145.3,74-36.6,38.3-60.2,89.1-66.3,142.4-1.7,15.7-.7,51.6,2,66.6,9.2,51.5,31.9,95.7,67.8,131.9a229.39,229.39,0,0,0,64.3,46.5,249.89,249.89,0,0,0,75.5,23.7c15.9,2.4,51.1,2.4,66.8.1,43.6-6.6,80.3-21.9,114.7-47.6,12.9-9.7,33.5-29.6,43-41.6,28.6-36.3,45.7-76.9,52.1-123.5,2-14.2,1.7-48.8-.5-63.5-10.5-70.2-49.1-131.5-107-170-28.4-18.8-59.8-31.3-94.7-37.6C280.65,11.78,240.05,11,224.25,13.18Z"
                transform="translate(-11.81 -11.91)"
              />
              <path
                fill="#ffffff"
                stroke="none"
                d="M314.55,316l-.3,54.1-42.5,3.8c-23.4,2-43.5,3.7-44.7,3.8h-2.3V120.18l43.8-3.8c24-2.1,44.3-3.8,45-3.7.9,0,1.2,9.9,1.2,45.9v46l5.3-.5c2.8-.3,8.8-.8,13.2-1.2l8-.7.3-46.3.2-46.2,2.8-.1c1.5,0,19.1-1.5,39.2-3.3s39.1-3.4,42.3-3.5l5.7-.1v256.9l-4.2.5c-2.4.4-20.3,2-39.8,3.6s-37.9,3.3-40.7,3.6l-5.3.6V259.38l-7.2.7c-4,.3-10.1.9-13.5,1.2l-6.3.6"
                transform="translate(-11.81 -11.91)"
              />
              <path
                fill="#ffffff"
                stroke="none"
                d="M185.55,123.78l4.2-.1v107.7c0,65.3-.4,110.5-1,114.6-1.1,7.7-2.6,11-8.1,18.3-7.6,10.3-20.9,16.6-43,20.3-9.6,1.7-63.4,7.1-70,7.1-1.8,0-1.9-1-1.9-22.5v-22.5h5.5c12.1,0,22.9-4.2,26.2-10.3,1.7-3,1.8-10.3,2.3-104.2l.5-101,40.5-3.6"
                transform="translate(-11.81 -11.91)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('corgi'))
