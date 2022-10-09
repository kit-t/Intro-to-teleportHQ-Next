import React from 'react'

import PropTypes from 'prop-types'

const Heading = (props) => {
  return (
    <>
      <div className="heading-container">
        <img
          alt="image"
          src="/playground_assets/logo.svg"
          className="heading-image"
        />
        <h1 className="heading-text heading">{props.heading1}</h1>
        <span className="heading-text1 subheading">{props.text}</span>
      </div>
      <style jsx>
        {`
          .heading-container {
            display: flex;
            max-width: 600px;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .heading-image {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .heading-text {
            width: 100%;
            text-align: left;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .heading-text1 {
            text-align: left;
          }
        `}
      </style>
    </>
  )
}

Heading.defaultProps = {
  heading1: 'Heading',
  text: 'Let’s walk through this tutorial together to get you ready for building your next projects',
}

Heading.propTypes = {
  heading1: PropTypes.string,
  text: PropTypes.string,
}

export default Heading
