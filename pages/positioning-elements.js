import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const PositioningElements = (props) => {
  return (
    <>
      <div className="positioning-elements-container">
        <Head>
          <title>Positioning-Elements - Intro to teleportHQ</title>
          <meta
            name="description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="Positioning-Elements - Intro to teleportHQ"
          />
          <meta
            property="og:description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b683b0e8-8dd4-4de9-99c8-8383256b5530/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
          />
        </Head>
        <div className="positioning-elements-container1">
          <div className="positioning-elements-container2">
            <Heading
              text="Let's see how we position elements in containers"
              heading1="Positioning Elements"
            ></Heading>
            <div className="positioning-elements-ul">
              <ListItem text="Drag and drop a Heading (H) in the box below "></ListItem>
              <ListItem text="Try to place it in another area of the container and see what happens"></ListItem>
            </div>
            <div className="positioning-elements-container3">
              <h1>Welcome to My Website</h1>
            </div>
            <div className="positioning-elements-ul1">
              <ListItem text="You can place your elements to any of these nine points in your containers"></ListItem>
              <Tip text="This option is available only for containers with display flex for the moment"></Tip>
              <ListItem text="Not sure if it's the right position for your element? Just drag and drop it to another point!"></ListItem>
            </div>
          </div>
          <Navigation></Navigation>
        </div>
      </div>
      <style jsx>
        {`
          .positioning-elements-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .positioning-elements-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .positioning-elements-container2 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .positioning-elements-ul {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .positioning-elements-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 350px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .positioning-elements-ul1 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default PositioningElements
