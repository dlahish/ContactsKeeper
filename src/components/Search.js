import React, { Component, PropTypes } from 'react'
import searchIcon from '../../media/search-icon.png'

const styles = {
  form: {
    display: 'inline'
  },
  icon: {
    position: 'relative',
    height: '30px',
    top: '10px',
    right: '5px',
    cursor: 'pointer',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px'
  }
}

export default class Search extends Component {
  preventEnterDefault(e) {
    if (e.keyCode == 13) {
      e.preventDefault()
    }
  }

  render() {
    const { value, onSearchChange } = this.props
    return (
      <form style={styles.form}>
        <input
          type="text"
          value={value}
          onChange={onSearchChange}
          onKeyDown={this.preventEnterDefault}
          placeholder="Search"
          className="search-input"
        />
        <img src={searchIcon} style={styles.icon}/>
      </form>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
}
