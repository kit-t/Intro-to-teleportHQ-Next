import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const DesignTokens = (props) => {
  return (
    <>
      <div className="design-tokens-container">
        <Head>
          <title>Design-Tokens - Intro to teleportHQ</title>
          <meta
            name="description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="Design-Tokens - Intro to teleportHQ"
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
        <div className="design-tokens-container1">
          <div className="design-tokens-container2">
            <Heading
              text="Set up your design language for a consistent look across your project"
              heading1="Design Tokens"
            ></Heading>
            <div className="design-tokens-ul">
              <ListItem text="Go to the Design Tokens Panel to see the available text styles, color and layout tokens"></ListItem>
              <Tip text="To see the Design Tokens panel you need to click outside of the canvas"></Tip>
              <ListItem text="Select the button to begin styling it from the Visual Inspector"></ListItem>
              <ListItem text="Try changing the padding and background color using tokens"></ListItem>
              <Tip text="Notice that some inputs support color tokens, others layout tokens and some don't support tokens at all"></Tip>
              <div className="design-tokens-container3">
                <ListItem text="Go to the Text Style section in the Inspector and link the desired text style token by clicking the icon"></ListItem>
                <div className="design-tokens-container4">
                  <svg viewBox="0 0 1024 1024" className="design-tokens-icon">
                    <path d="M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z"></path>
                    <path d="M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"></path>
                  </svg>
                </div>
              </div>
              <Tip text="From here you can also create new text styles with the currently set properties if you press + "></Tip>
            </div>
            <h2 className="design-tokens-text subheading">Desired Outcome</h2>
            <div className="design-tokens-container5">
              <button className="design-tokens-button button">Button</button>
            </div>
            <h2 className="design-tokens-text1 subheading">Give it a try</h2>
            <div className="design-tokens-container6">
              <button className="button">Button</button>
            </div>
          </div>
          <Navigation></Navigation>
        </div>
      </div>
      <style jsx>
        {`
          .design-tokens-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .design-tokens-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .design-tokens-container2 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .design-tokens-ul {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .design-tokens-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .design-tokens-container4 {
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-primary-900);
          }
          .design-tokens-icon {
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
          }
          .design-tokens-text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .design-tokens-container5 {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: center;
          }
          .design-tokens-button {
            color: var(--dl-color-gray-white);
            border: none;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #194b90;
          }
          .design-tokens-text1 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            margin-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .design-tokens-container6 {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default DesignTokens
