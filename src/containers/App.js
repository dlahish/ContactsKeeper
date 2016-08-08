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

function filterContacts(contacts, searchInput, sortFirstName, sortLastName) {
  let sortedContacts = contacts

  if (sortFirstName == 'up') {
    sortedContacts = contacts.sort((a,b) => a.fname < b.fname)
  } else if (sortFirstName == 'down') {
    sortedContacts = contacts.sort((a,b) => a.fname > b.fname)
  }

  if (sortLastName == 'up') {
    sortedContacts = contacts.sort((a,b) => a.lname < b.lname)
  } else if (sortLastName == 'down') {
    sortedContacts = contacts.sort((a,b) => a.lname > b.lname)
  }

  if (searchInput.length == 0) {
    return sortedContacts
  }

  let filteredContacts = []
  sortedContacts.map(contact => {
    const contactFirstTemp = contact.fname.toUpperCase().slice(0, searchInput.length)
    const searchFirstTemp  = searchInput.toUpperCase()
    const contactLastTemp = contact.lname.toUpperCase().slice(0, searchInput.length)
    const searchLastTemp  = searchInput.toUpperCase()
    if (contactFirstTemp == searchFirstTemp || contactLastTemp == searchLastTemp) {
      filteredContacts.push(contact)
    }
  })
  return filteredContacts
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.saveContact = this.saveContact.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.sortFirstName = this.sortFirstName.bind(this)
    this.sortLastName = this.sortLastName.bind(this)

    this.state = {
      addContactButtonClass: "add-contact-button",
      sortFirstName: 'none',
      sortLastName: 'none'
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
    if (this.state.sortFirstName == 'none' || this.state.sortFirstName == 'down') {
      this.setState({
        sortFirstName: 'up',
        sortLastName: 'none'
      })
    } else {
      this.setState({
        sortFirstName: 'down',
        sortLastName: 'none'
      })
    }
  }

  sortLastName() {
    if (this.state.sortLastName == 'none' || this.state.sortLastName == 'down') {
      this.setState({
        sortLastName: 'up',
        sortFirstName: 'none'
      })
    } else {
      this.setState({
        sortLastName: 'down',
        sortFirstName: 'none'
      })
    }
  }

  render() {
    const filteredContacts = filterContacts(this.props.contacts, this.props.searchInput, this.state.sortFirstName, this.state.sortLastName)
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
            sortFirstNameValue={this.state.sortFirstName}
            sortLastName={this.sortLastName}
            sortLastNameValue={this.state.sortLastName}
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
