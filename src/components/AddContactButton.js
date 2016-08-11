import React, { Component, PropTypes } from 'react'

const styles = {
  addIcon: {
    marginRight: '6px'
  },
  button: {
    display: 'inline-block',
    float: 'right'
  }
}

export default class AddContactButton extends Component {
  render() {
    return (
      <div style={styles.button}>
        <button
          onClick={this.props.openModal}
          className={this.props.addContactButtonClass}
        >
          <i className="fa fa-plus-circle" style={styles.addIcon}></i>
            Contacts Keeper
        </button>
      </div>
    )
  }
}

AddContactButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  addContactButtonClass: PropTypes.string
}
