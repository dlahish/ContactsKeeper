import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchInput, saveContactToStore, openModal, closeModal } from '../actions'
import AddContactButton from '../components/AddContactButton'
import NewContactForm from '../components/newContactForm'
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
    sortedContacts = contacts.sort((a,b) => a.firstName < b.firstName)
  } else if (sortFirstName == 'down') {
    sortedContacts = contacts.sort((a,b) => a.firstName > b.firstName)
  }

  if (sortLastName == 'up') {
    sortedContacts = contacts.sort((a,b) => a.lastName < b.lastName)
  } else if (sortLastName == 'down') {
    sortedContacts = contacts.sort((a,b) => a.lastName > b.lastName)
  }

  if (searchInput.length == 0) {
    return sortedContacts
  }

  let filteredContacts = []
  sortedContacts.map(contact => {
    const contactFirstTemp = contact.firstName.toUpperCase().slice(0, searchInput.length)
    const searchFirstTemp  = searchInput.toUpperCase()
    const contactLastTemp = contact.lastName.toUpperCase().slice(0, searchInput.length)
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

  saveContact(firstName, lastName, dateOfBirth, phone, email, notes) {
    const { dispatch } = this.props
    dispatch(saveContactToStore(firstName, lastName, dateOfBirth, phone, email, notes))
    this.handleCloseModal()
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
          <AddContactButton
            openModal={this.handleOpenModal}
            addContactButtonClass={this.state.addContactButtonClass}
          />
          {this.props.modalOpen ?
            <NewContactForm
              saveContact={this.saveContact}
              closeModal={this.handleCloseModal}
            /> : ''
          }
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
