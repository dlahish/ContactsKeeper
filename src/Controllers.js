import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
// import AddContact from './AddContact'

export default class Controllers extends Component {
  render() {
    return (
      <div>
        <Search />
        {/* <AddContact /> */}
      </div>
    )
  }
}

function mapStateToProps(state, dispatch) {

}

export default connect(mapStateToProps)(Controllers)
