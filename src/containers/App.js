import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchInput, saveContactToStore, openModal, closeModal } from '../actions'
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

function filterContacts(contacts, searchInput, sortFirstName) {
  const sortedContacts = contacts

  if (sortFirstName == 'up') {
    sortedContacts = contacts.sort((a,b) => a.fname < b.fname)
  } else if (sortFirstName == 'down') {
    sortedContacts = contacts.sort((a,b) => a.fname > b.fname)
  }

  if (searchInput.length == 0) {
    return sortedContacts
  }

  const con = contacts
  let filteredContacts = []
  con.map(contact => {
    const contactFirstTemp = contact.fname.toUpperCase().slice(0, searchInput.length)
    const searchFirstTemp  = searchInput.toUpperCase()
    const contactLastTemp = contact.lname.toUpperCase().slice(0, searchInput.length)
    const searchLastTemp  = searchInput.toUpperCase()
    if (contactFirstTemp == searchFirstTemp || contactLastTemp == searchLastTemp) {
      filteredContacts.push(contact)
    }
  })
}

function sortFirstName() {
  let sortedContacts = this.props.contacts
  return this.props.contacts.sort((a,b) => a.fname < b.fname)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.saveContact = this.saveContact.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.sortFirstName = this.sortFirstName.bind(this)

    this.state = {
      addContactButtonClass: "add-contact-button",
      sortFirstName: 'none'
    }
  }

  handleOpenModal() {
    const { dispatch } = this.props
    this.setState({ addContactButtonClass: "add-contact-button-clicked" })
    dispatch(openModal())
  }

  handleCloseModal() {
    const { dispatch } = this.props
    this.setState({ addContactButtonClass: "add-contact-button" })
    dispatch(closeModal())
  }

  handleSearchInputChange(e) {
    const { dispatch } = this.props
    dispatch(searchInput(e.target.value))
  }

  saveContact(fname, lname, dob, phone, email, notes) {
    const { dispatch } = this.props

    dispatch(saveContactToStore(fname, lname, dob, phone, email, notes))
    dispatch(closeModal())
  }

  sortFirstName() {
    console.log('FIRST NAME')
    this.setState({ sortFirstName: 'up' })
  }

  render() {
    const filteredContacts = filterContacts(this.props.contacts, this.props.searchInput, this.state.sortFirstName)
    return (
      <div>
        <Header />
        <div style={styles.mainContent}>
          <Search
            value={this.props.searchInput}
            onSearchChange={this.handleSearchInputChange}
          />
          <AddContact
            saveContact={this.saveContact}
            openModal={this.handleOpenModal}
            closeModal={this.handleCloseModal}
            modalOpen={this.props.modalOpen}
            addContactButtonClass={this.state.addContactButtonClass}
          />
          <Table
            contacts={filteredContacts}
            sortFirstName={this.sortFirstName}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  searchInput: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  contacts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    searchInput: state.search,
    contacts: state.contacts,
    modalOpen: state.modal
  }
}

export default connect(mapStateToProps)(App)
