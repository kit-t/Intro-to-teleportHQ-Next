import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Next from '../components/next'

const GettingStarted = (props) => {
  return (
    <>
      <div className="getting-started-container">
        <Head>
          <title>Intro to teleportHQ</title>
          <meta
            name="description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta property="og:title" content="Intro to teleportHQ" />
          <meta
            property="og:description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b683b0e8-8dd4-4de9-99c8-8383256b5530/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
          />
        </Head>
        <div className="getting-started-container1">
          <Heading heading1="Welcome to teleportHQ!"></Heading>
          <div className="getting-started-ul">
            <ListItem></ListItem>
            <ListItem text="Your progress is saved automatically"></ListItem>
            <ListItem text="Don't worry if you make mistakes. Just undo with Ctrl/Cmd + Z"></ListItem>
          </div>
          <div className="getting-started-footer">
            <span className="getting-started-text subheading">
              Let&apos;s do this!
            </span>
            <Next
              text="Hit Ctrl/Cmd + Arrow Down for the next step"
              rootClassName="next-root-class-name"
            ></Next>
          </div>
        </div>
        <div className="getting-started-container2">
          <div className="getting-started-container3">
            <div className="getting-started-container4"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .getting-started-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .getting-started-container1 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .getting-started-ul {
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .getting-started-footer {
            display: flex;
            align-self: stretch;
            margin-top: 4em;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .getting-started-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .getting-started-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .getting-started-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .getting-started-container4 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default GettingStarted
