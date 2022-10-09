import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const BuildingLayoutsNavbar = (props) => {
  return (
    <>
      <div className="building-layouts-navbar-container">
        <Head>
          <title>Building-Layouts-Navbar - Intro to teleportHQ</title>
          <meta
            name="description"
            content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="Building-Layouts-Navbar - Intro to teleportHQ"
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
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="building-layouts-navbar-image"
        />
        <div className="building-layouts-navbar-container1">
          <div className="building-layouts-navbar-container2">
            <Heading
              text=" Crating a Navbar"
              heading1="Building Layouts"
            ></Heading>
            <h2 className="building-layouts-navbar-text subheading">
              Desired Outcome
            </h2>
            <div className="building-layouts-navbar-container3">
              <div className="building-layouts-navbar-div">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/img/default.png"
                  className="building-layouts-navbar-image1"
                />
                <div className="building-layouts-navbar-container4">
                  <a
                    href="https://teleporthq.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="building-layouts-navbar-link"
                  >
                    Home
                  </a>
                  <a
                    href="https://teleporthq.io/about"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="building-layouts-navbar-link1"
                  >
                    About
                  </a>
                  <a
                    href="https://teleporthq.io/docs"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="building-layouts-navbar-link2"
                  >
                    Docs
                  </a>
                </div>
              </div>
              <a
                href="https://play.teleporthq.io/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Get Started
              </a>
            </div>
            <div className="building-layouts-navbar-ul">
              <ListItem text="Add an Image (I) and four Text (T) elements or Links (L)"></ListItem>
              <ListItem text="Select the image together with the first three text elements and group them "></ListItem>
              <Tip text="Ctrl/Cmd + Click to select and Ctrl + G to group"></Tip>
              <ListItem text="Select the parent container. Change the distribution of the items to space-between from the Layout section in the Visual Inspector"></ListItem>
              <ListItem text="Set margins on the first three text elements"></ListItem>
              <ListItem text="Bonus - add links to all the texts"></ListItem>
              <div className="building-layouts-navbar-container5">
                <Tip text="To add a link, select and element and click on the link icon above it"></Tip>
                <div className="building-layouts-navbar-container6">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="building-layouts-navbar-icon"
                  >
                    <path d="M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z"></path>
                    <path d="M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="building-layouts-navbar-text1 subheading">
              Give it a try
            </h2>
            <div className="building-layouts-navbar-container7">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="building-layouts-navbar-image2"
              />
              <span>Text</span>
              <span>Text</span>
              <span>Text</span>
              <span>Text</span>
            </div>
          </div>
          <Navigation></Navigation>
        </div>
      </div>
      <style jsx>
        {`
          .building-layouts-navbar-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .building-layouts-navbar-image {
            width: 100px;
            object-fit: cover;
          }
          .building-layouts-navbar-container1 {
            flex: 1;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .building-layouts-navbar-container2 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .building-layouts-navbar-text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .building-layouts-navbar-container3 {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
          }
          .building-layouts-navbar-div {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .building-layouts-navbar-image1 {
            width: 50px;
            object-fit: cover;
          }
          .building-layouts-navbar-container4 {
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .building-layouts-navbar-link {
            margin-left: var(--dl-space-space-unit);
          }
          .building-layouts-navbar-link1 {
            margin-left: var(--dl-space-space-unit);
          }
          .building-layouts-navbar-link2 {
            margin-left: var(--dl-space-space-unit);
          }
          .building-layouts-navbar-ul {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .building-layouts-navbar-container5 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .building-layouts-navbar-container6 {
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
          .building-layouts-navbar-icon {
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
          }
          .building-layouts-navbar-text1 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .building-layouts-navbar-container7 {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: dashed;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
          }
          .building-layouts-navbar-image2 {
            width: 54px;
            height: 49px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default BuildingLayoutsNavbar
