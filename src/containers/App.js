import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchInput, openModal } from '../actions'
import AddContact from '../components/AddContact'
import Header from '../components/Header'
import Search from '../components/Search'
import Table from '../components/Table'

const styles = {
  mainContent: {
    width: '95%',
    margin: '0 auto'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  handleSearchInputChange(e) {
    const { dispatch } = this.props
    dispatch(searchInput(e.target.value))
  }

  handleOpenModal() {
    const { dispatch } = this.props
    dispatch(openModal())
  }

  render() {
    return (
      <div>
        <Header />
        <div style={styles.mainContent}>
          <Search
            value={this.props.searchInput}
            onSearchChange={this.handleSearchInputChange}
          />
          <AddContact handleOpenModal={this.handleOpenModal}/>
          <Table contacts={this.props.contacts} modalOpen={this.props.modalOpen} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  searchInput: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    searchInput: state.contacts.searchInput,
    contacts: state.contacts.contacts,
    modalOpen: state.contacts.modalOpen
  }
}

export default connect(mapStateToProps)(App)
