import React, { Component, PropTypes } from 'react'
import searchIcon from '../../media/search_icon.png'

const styles = {
  form: {
    display: 'inline'
  },
  icon: {
    backgroundColor: '#4d79ff',
    color: 'white',
    padding: '0 2 0 2',
    fontSize: '27px',
    position: 'relative',
    top: '3px',
    right: '1px',
    cursor: 'pointer'
  },
  input: {
    fontSize: '18px',
    border: '2px solid grey',
    borderRadius: '3px',
    borderRight: 'none'
  }
}

export default class Search extends Component {
  render() {
    const { value, onSearchChange } = this.props
    return (
      <form style={styles.form}>
        <input
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search"
          style={styles.input}
        />
        <i className="fa fa-search" type="submit" style={styles.icon}></i>
      </form>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
}
