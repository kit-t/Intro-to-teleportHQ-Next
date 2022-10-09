import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const PositioningMultipleElements = (props) => {
  return (
    <>
      <div className="positioning-multiple-elements-container">
        <Head>
          <title>Positioning-Multiple-Elements - Intro to teleportHQ</title>
          <meta
            name="description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="Positioning-Multiple-Elements - Intro to teleportHQ"
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
        <div className="positioning-multiple-elements-container1">
          <div className="positioning-multiple-elements-container2">
            <Heading
              text=" "
              heading1="Positioning Multiple Elements"
            ></Heading>
            <h2 className="positioning-multiple-elements-text subheading">
              Desired Outcome
            </h2>
            <div className="positioning-multiple-elements-container3">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/img/default.png"
                className="positioning-multiple-elements-image"
              />
              <div className="positioning-multiple-elements-container4">
                <h1>Heading</h1>
                <span>Text</span>
              </div>
            </div>
            <div className="positioning-multiple-elements-ul">
              <ListItem text="Add an Image (I) in the container below"></ListItem>
              <ListItem text="Drag and drop a Heading (H) next to the image"></ListItem>
              <ListItem text="Drag and drop a Text (T) element below the Heading"></ListItem>
              <ListItem text="See what happens!"></ListItem>
            </div>
            <div className="positioning-multiple-elements-container5">
              <h2 className="positioning-multiple-elements-text3 subheading">
                Give it a try
              </h2>
            </div>
            <div className="positioning-multiple-elements-container6">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="positioning-multiple-elements-image1"
              />
              <div className="positioning-multiple-elements-container7">
                <h1>Heading</h1>
                <span>Text</span>
              </div>
            </div>
            <div className="positioning-multiple-elements-ul1">
              <ListItem text="We automatically group elements in containers when needed"></ListItem>
              <div className="positioning-multiple-elements-container8">
                <ListItem text="Check the Tree View to get a better overview of your page's structure"></ListItem>
              </div>
              <Tip text="Open the Files &amp; Tree View panel by pressing Ctrl/Cmd + 3"></Tip>
            </div>
          </div>
          <Navigation></Navigation>
        </div>
      </div>
      <style jsx>
        {`
          .positioning-multiple-elements-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .positioning-multiple-elements-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .positioning-multiple-elements-container2 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .positioning-multiple-elements-text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .positioning-multiple-elements-container3 {
            width: 500px;
            height: 150;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: center;
          }
          .positioning-multiple-elements-image {
            width: 100px;
            height: 90px;
            object-fit: cover;
          }
          .positioning-multiple-elements-container4 {
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .positioning-multiple-elements-ul {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .positioning-multiple-elements-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .positioning-multiple-elements-text3 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .positioning-multiple-elements-container6 {
            width: 500px;
            height: 150;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: center;
          }
          .positioning-multiple-elements-image1 {
            width: 100px;
            object-fit: cover;
          }
          .positioning-multiple-elements-container7 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .positioning-multiple-elements-ul1 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .positioning-multiple-elements-container8 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default PositioningMultipleElements
