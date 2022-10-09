import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const StylingElements = (props) => {
  return (
    <>
      <div className="styling-elements-container">
        <Head>
          <title>Styling-Elements - Intro to teleportHQ</title>
          <meta
            name="description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="Styling-Elements - Intro to teleportHQ"
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
        <div className="styling-elements-container01">
          <div className="styling-elements-container02">
            <Heading
              text="Use the Visual Inspector to style your elements"
              heading1="Styling Elements"
            ></Heading>
            <h2 className="styling-elements-text subheading">
              Desired Outcome
            </h2>
            <div className="styling-elements-container03">
              <div className="styling-elements-container04">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                  className="styling-elements-image"
                />
                <div className="styling-elements-container05">
                  <h1>Title</h1>
                  <span>Description</span>
                </div>
              </div>
            </div>
            <div className="styling-elements-ul">
              <ListItem text='You will first group the elements together with Ctrl/Cmd + G or right-click and select "Group"'></ListItem>
              <div className="styling-elements-container06">
                <ListItem text="Select the image element and choose a nice photo from the Asset Manager "></ListItem>
                <div className="styling-elements-container07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="styling-elements-icon"
                  >
                    <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM731.429 694.857v182.857h-585.143v-109.714l109.714-109.714 73.143 73.143 219.429-219.429zM256 585.143c-60.571 0-109.714-49.143-109.714-109.714s49.143-109.714 109.714-109.714 109.714 49.143 109.714 109.714-49.143 109.714-109.714 109.714z"></path>
                  </svg>
                </div>
              </div>
              <Tip text="To open the Asset Manager, hit Ctrl/Cmd + 3"></Tip>
              <ListItem text="On the right side you will see the Visual Inspector where you can style the elements to your liking"></ListItem>
              <Tip text="Can't find the property you are looking for? Click on the Advanced tab to add custom CSS properties"></Tip>
              <ListItem text="Play around with layout properties, padding, border, radius, and text alignment until you get the desired look"></ListItem>
            </div>
            <h2 className="styling-elements-text3 subheading">
              Try it yourself
            </h2>
            <div className="styling-elements-container08">
              <div className="styling-elements-container09">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="styling-elements-image1"
                />
              </div>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/img/default.png"
                className="styling-elements-image2"
              />
              <h1>Heading</h1>
              <span>Text</span>
            </div>
          </div>
          <h2 className="styling-elements-text6 subheading">
            <span>Bonus - C</span>
            <span>reating responsive layouts</span>
          </h2>
          <ListItem text="If you're feeling up to it you can also experiment with media query styles to make your elements responsive"></ListItem>
          <ListItem text="Just resize the page from the right or left sides until you reach a media query breakpoint "></ListItem>
          <ListItem text="All the styles you set will be applied when the page's width is smaller than the media query breakpoint"></ListItem>
          <Navigation></Navigation>
        </div>
        <div className="styling-elements-container10">
          <div className="styling-elements-container11">
            <div className="styling-elements-container12"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .styling-elements-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .styling-elements-container01 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .styling-elements-container02 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .styling-elements-text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .styling-elements-container03 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .styling-elements-container04 {
            width: 200px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
          }
          .styling-elements-image {
            width: 100%;
            object-fit: cover;
          }
          .styling-elements-container05 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .styling-elements-ul {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .styling-elements-container06 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .styling-elements-container07 {
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
          .styling-elements-icon {
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
          }
          .styling-elements-text3 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .styling-elements-container08 {
            width: 100%;
            height: 318px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: center;
          }
          .styling-elements-container09 {
            width: 50%;
            height: 269px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .styling-elements-image1 {
            width: 100px;
            object-fit: cover;
          }
          .styling-elements-image2 {
            width: 100px;
            object-fit: cover;
          }
          .styling-elements-text6 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .styling-elements-container10 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .styling-elements-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .styling-elements-container12 {
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

export default StylingElements
