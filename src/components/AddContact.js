import React, { Component, PropTypes } from 'react'

const styles = {
  addIcon: {
    marginRight: '6px'
  },
  button: {
    background: '#4d79ff',
    color: 'white',
    fontWeight: 400,
    borderRadius: '2px',
    outline: 'none',
    fontSize: '18px'
  },
  div: {
    display: 'inline-block',
    float: 'right'
  }
}

export default class AddContact extends Component {
  render() {
    return (
      <div style={styles.div}>
        <button style={styles.button}><i className="fa fa-plus-circle add-icon" style={styles.addIcon}></i>Contacts Keeper</button>
      </div>
    )
  }
}
