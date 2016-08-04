import React, { Component, PropTypes } from 'react'

const styles = {
  addIcon: {
    marginRight: '6px'
  },
  button: {
    background: '#4d79ff',
    color: 'white',
    fontWeight: 400,
    borderRadius: '2px',
    outline: 'none',
    fontSize: '18px'
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
    borderBottom: '1px solid grey',
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
    borderRadius: '4px',
    fontSize: '18px'
  },
  inputFieldRight: {
    display: 'inline-block',
    float: 'right',
    paddingRight: 0
  },
  textarea: {
    borderRadius: '4px',
    fontSize: '18px'
  },
  footer: {
    paddingRight: '10px',
    borderTop: '1px solid black',
    height: '30px'
  },
  saveButton: {
    float: 'right',
    marginTop: '10px',
    borderRadius: '1px',
    height: '25px',
    width: '50px',
    backgroundColor: '#595959',
    color: 'white'
  }
}

export default class AddContact extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)

    this.state = {
      modalOpen: true
    }
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  render() {
    return (
      <div style={styles.buttonDiv}>
        <button
          style={styles.button}
          onClick={this.openModal}
        >
          <i className="fa fa-plus-circle" style={styles.addIcon}></i>
            Contacts Keeper
        </button>
        {this.state.modalOpen ?
          <div className='modal-background'>
            <div className='modal'>
              <div style={styles.modalHeader}>
                Contacts Keeper
                <i className="fa fa-times-circle close" aria-hidden="true" style={styles.closeIcon} onClick={this.closeModal}></i>
              </div>
              <div style={styles.mainContent}>
                <form>
                  <div style={styles.inputField}>
                    <p style={styles.label}>First Name</p>
                    <input type='text' style={styles.input}/>
                  </div>
                  <div style={styles.inputFieldRight}>
                    <p style={styles.label}>Last Name</p>
                    <input type='text' style={styles.input}/>
                  </div>
                  <div style={styles.inputField}>
                    <p style={styles.label}>Date of Birth</p>
                    <input type='text' style={styles.input}/>
                  </div>
                  <div style={styles.inputFieldRight}>
                    <p style={styles.label}>Phone Number</p>
                    <input type='text' style={styles.input}/>
                  </div>
                  <div style={styles.inputField}>
                    <p style={styles.label}>Email</p>
                    <input type='text' style={styles.input}/>
                  </div>
                  <div style={styles.inputField}>
                    <p style={styles.label}>Notes</p>
                    <textarea rows="2" cols="50" style={styles.input}/>
                  </div>
                  <div style={styles.footer}>
                    <button
                      onClick={this.closeModal}
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

// AddContact.propTypes = {
//   addContact: PropTypes.func.isRequired
// }
