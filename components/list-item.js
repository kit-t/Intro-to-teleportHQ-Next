import React from 'react'

import PropTypes from 'prop-types'

const ListItem = (props) => {
  return (
    <>
      <div className="list-item-container">
        <svg viewBox="0 0 1024 1024" className="list-item-icon">
          <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
        </svg>
        <span className="list-item-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .list-item-container {
            display: flex;
            margin-top: 0;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .list-item-icon {
            width: 12px;
            height: 12px;
            margin-top: 2px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .list-item-text {
            max-width: 600px;
          }
        `}
      </style>
    </>
  )
}

ListItem.defaultProps = {
  text: 'We’ll start with simple tasks and quickly get to the advanced concepts',
}

ListItem.propTypes = {
  text: PropTypes.string,
}

export default ListItem
