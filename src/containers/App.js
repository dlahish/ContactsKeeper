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

function filterContacts(contacts, searchInput) {
  if (searchInput.length == 0) {
    return contacts
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
  return filteredContacts
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.saveContact = this.saveContact.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    const { dispatch } = this.props
    dispatch(openModal())
  }

  handleCloseModal() {
    const { dispatch } = this.props
    dispatch(closeModal())
  }

  handleSearchInputChange(e) {
    const { dispatch } = this.props
    dispatch(searchInput(e.target.value))
  }

  saveContact(e) {
    const { dispatch } = this.props
    e.preventDefault()
    const fname = e.target.fname.value
    const lname = e.target.lname.value
    const dob = e.target.dob.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    const notes = e.target.notes.value
    dispatch(saveContactToStore(fname, lname, dob, phone, email, notes))
    dispatch(closeModal())
  }

  render() {
    const filteredContacts = filterContacts(this.props.contacts, this.props.searchInput)
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
          />
          <Table contacts={filteredContacts} />
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
