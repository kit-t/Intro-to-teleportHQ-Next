import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const BuildingLayoutsCardAlignment = (props) => {
  return (
    <>
      <div className="building-layouts-card-alignment-container">
        <Head>
          <title>Building-Layouts-Card-Alignment - Intro to teleportHQ</title>
          <meta
            name="description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="Building-Layouts-Card-Alignment - Intro to teleportHQ"
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
        <div className="building-layouts-card-alignment-container1">
          <div className="building-layouts-card-alignment-container2">
            <Heading
              text="Card &amp; Alignment"
              heading1="Building Layouts"
            ></Heading>
            <h2 className="building-layouts-card-alignment-text subheading">
              Desired Outcome
            </h2>
            <div className="building-layouts-card-alignment-container3">
              <h1 className="building-layouts-card-alignment-text01">
                Heading
              </h1>
              <span className="building-layouts-card-alignment-text02">
                sdfsadfasf
              </span>
              <div className="building-layouts-card-alignment-container4">
                <button className="button">No</button>
                <button className="building-layouts-card-alignment-button1 button">
                  Yes
                </button>
              </div>
            </div>
            <div className="building-layouts-card-alignment-ul">
              <ListItem text="Add the elements you see above using keyboard shortcuts"></ListItem>
              <ListItem text="Change their position to the vertical axis by selecting the parent node and choosing Column in the Layout section "></ListItem>
              <ListItem text="To have the buttons on the same row, simply drag the second one to the right of the first"></ListItem>
              <ListItem text="Set margins on the first three elements"></ListItem>
              <Tip text="Try using the layout tokens we introduced earlier"></Tip>
            </div>
            <h2 className="building-layouts-card-alignment-text03 subheading">
              Give it a try
            </h2>
            <div className="building-layouts-card-alignment-div">
              <h1>Heading</h1>
              <span>
                asfdasfasssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                dfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffssss
                sdafsadfasd asdasfasfsd asfdasfasdf dsfsadfsdfsd sdfds
              </span>
              <div className="building-layouts-card-alignment-container5">
                <button className="building-layouts-card-alignment-button2 button">
                  Button
                </button>
                <button className="button">Button</button>
              </div>
            </div>
            <div className="building-layouts-card-alignment-feedback">
              <span>
                <span>
                  How was it so far? Did you find it too easy or hard to follow?
                  We would love to hear your feedback. Write us at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="mailto:hello@teleporthq.io?subject=">
                  <span className="building-layouts-card-alignment-text08">
                    hello@teleporthq.io
                  </span>
                </a>
                <span className="building-layouts-card-alignment-text09"></span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <Navigation></Navigation>
        </div>
      </div>
      <style jsx>
        {`
          .building-layouts-card-alignment-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .building-layouts-card-alignment-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .building-layouts-card-alignment-container2 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .building-layouts-card-alignment-text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .building-layouts-card-alignment-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .building-layouts-card-alignment-text01 {
            align-self: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .building-layouts-card-alignment-text02 {
            text-align: left;
            margin-bottom: var(--dl-space-space-unit);
          }
          .building-layouts-card-alignment-container4 {
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .building-layouts-card-alignment-button1 {
            margin-left: var(--dl-space-space-unit);
          }
          .building-layouts-card-alignment-ul {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .building-layouts-card-alignment-text03 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .building-layouts-card-alignment-div {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-700);
            border-style: dashed;
            border-width: 2px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .building-layouts-card-alignment-container5 {
            flex: 0 0 auto;
            width: 180px;
            height: 42px;
            display: flex;
            align-self: flex-end;
            align-items: center;
            justify-content: space-between;
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .building-layouts-card-alignment-button2 {
            height: 34px;
          }
          .building-layouts-card-alignment-feedback {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: center;
          }
          .building-layouts-card-alignment-text08 {
            font-style: normal;
            font-weight: 500;
          }
          .building-layouts-card-alignment-text09 {
            font-style: normal;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

export default BuildingLayoutsCardAlignment
