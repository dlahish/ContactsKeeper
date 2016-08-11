import React, { Component, PropTypes } from 'react'

const styles = {
  addIcon: {
    marginRight: '6px'
  },
  buttonDiv: {
    display: 'inline-block',
    float: 'right'
  },
  modalHeader: {
    backgroundColor: '#3366ff',
    color: 'white',
    height: '30px',
    paddingTop: '10px',
    paddingLeft: '10px'
  },
  closeIcon: {
    float: 'right',
    marginRight: '10px'
  },
  mainContent: {
    padding: '3%',
    paddingBottom: '1px'
  },
  inputField: {
    display: 'inline-block',
    marginBottom: '25px'
  },
  label: {
    padding: 0,
    margin: 0,
    paddingBottom: '2px',
    fontSize: '15px'
  },
  input: {
    borderRadius: '3px',
    fontSize: '18px',
    borderStyle: 'none',
    border: '1px solid grey'
  },
  inputFieldRight: {
    display: 'inline-block',
    float: 'right',
    paddingRight: 0
  },
  notesInput: {
    borderRadius: '3px',
    fontSize: '18px',
    borderStyle: 'none',
    border: '1px solid grey',
    width: '242%'
  },
  footer: {
    paddingRight: '10px',
    // borderTop: '1px solid black',
    height: '30px'
  },
  saveButton: {
    float: 'right',
    marginTop: '10px',
    borderRadius: '1px',
    height: '25px',
    width: '50px',
    backgroundColor: '#595959',
    color: 'white',
    borderStyle: 'none',
    cursor: 'pointer'
  },
  hr: {
    position: 'relative',
    width: '510px',
    right: '15px'
  }
}

export default class AddContact extends Component {
  constructor(props) {
    super(props)
    this.validate = this.validate.bind(this)
  }

  validate(e) {
    e.preventDefault()
    let dateOfBirth = e.target.dateOfBirth.value
    if (dateOfBirth.length > 2) {
      const year = dateOfBirth.slice(0,4)
      const month = dateOfBirth.slice(5,7)
      const day = dateOfBirth.slice(8)
      dateOfBirth = day + '/' + month + '/' + year
    } else {
      dateOfBirth = ''
    }

    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    const notes = e.target.notes.value

    this.props.saveContact(firstName, lastName, dateOfBirth, phone, email, notes);
  }

  render() {
    return (
      <div style={styles.buttonDiv}>
        <button
          onClick={this.props.openModal}
          className={this.props.addContactButtonClass}
        >
          <i className="fa fa-plus-circle" style={styles.addIcon}></i>
            Contacts Keeper
        </button>
        {this.props.modalOpen ?
          <div className='modal-background'>
            <div className='modal'>
              <div style={styles.modalHeader}>
                Contacts Keeper
                <i className="fa fa-times-circle close" aria-hidden="true" style={styles.closeIcon} onClick={this.props.closeModal}></i>
              </div>
              <div style={styles.mainContent}>
                <form onSubmit={this.validate}>
                  <div style={styles.inputField}>
                    <p style={styles.label}>First Name</p>
                    <input type='text' name="firstName" style={styles.input} required/>
                  </div>
                  <div style={styles.inputFieldRight}>
                    <p style={styles.label}>Last Name</p>
                    <input type='text' name="lastName" style={styles.input} required/>
                  </div>
                  <div style={styles.inputField}>
                    <p style={styles.label}>Date of Birth</p>
                    <input type="date" name="dateOfBirth" style={styles.input}/>
                  </div>
                  <div style={styles.inputFieldRight}>
                    <p style={styles.label}>Phone Number</p>
                    <input type="number" name="phone" style={styles.input} />
                  </div>
                  <div style={styles.inputField}>
                    <p style={styles.label}>Email</p>
                    <input type='email' name="email" style={styles.input} />
                  </div><br />
                  <div style={styles.inputField}>
                    <p style={styles.label}>Notes</p>
                    <textarea rows="2" name="notes" style={styles.notesInput}/>
                  </div>
                  <hr style={styles.hr}/>
                  <div style={styles.footer}>
                    <button
                      type="submit"
                      style={styles.saveButton}
                    >Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>: ''}
      </div>
    )
  }
}

AddContact.propTypes = {
  saveContact: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  addContactButtonClass: PropTypes.string
}
