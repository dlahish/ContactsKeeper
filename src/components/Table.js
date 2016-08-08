import React, { Component, PropTypes } from 'react'

const styles = {
  table: {
    margin: '40px auto',
    border: '2px solid',
    borderColor: '#595959',
    width: '100%',
    borderCollapse: 'collapse'
  },
  tr: {
    background: '#4d4d4d',
    color: 'white'
  },
  th: {
    border: '1px solid',
    borderColor: '#d9d9d9',
    borderCollapse: 'collapse',
    paddingLeft: '15px',
    paddingTop: '6px',
    paddingBottom: '3px',
    fontSize: '12px',
    margin: 0,
    cursor: 'default'
  },
  td: {
    border: '1px solid',
    borderColor: '#d9d9d9',
    borderCollapse: 'collapse',
    paddingLeft: '15px',
    paddingTop: '6px',
    paddingBottom: '4px',
    fontSize: '16px',
    paddingLeft: '15px',
    margin: 0
  }
}

function getFirstNameSortIcon(sortFirstNameValue) {
  if (sortFirstNameValue == 'none' || sortFirstNameValue == 'down') {
    return 'fa fa-arrow-down down-arrow'
  } else {
    return 'fa fa-arrow-up down-arrow'
  }
}

function getLastNameSortIcon(sortLastNameValue) {
  if (sortLastNameValue == 'none' || sortLastNameValue == 'down') {
    return 'fa fa-arrow-down down-arrow'
  } else {
    return 'fa fa-arrow-up down-arrow'
  }
}

export default class Table extends Component {

  render() {
    const firstNameIconClass = getFirstNameSortIcon(this.props.sortFirstNameValue)
    const lastNameIconClass = getLastNameSortIcon(this.props.sortLastNameValue)

    return (
      <table style={styles.table}>
        <thead>
          <tr style={styles.tr}>
            <td
              onClick={this.props.sortFirstName}
              style={styles.th} width={'13%'}>
              First Name
              <i className={firstNameIconClass} aria-hidden="true"></i>
            </td>
            <td
              onClick={this.props.sortLastName}
              style={styles.th}
              width={'13%'}>
              Last Name
              <i className={lastNameIconClass} aria-hidden="true"></i>
            </td>
            <td style={styles.th} width={'10%'}>Date of Birth</td>
            <td style={styles.th} width={'13%'}>Phone</td>
            <td style={styles.th} width={'18%'}>Email</td>
            <td style={styles.th} width={'25%'}>Notes</td>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map((contact,i) => {
            return (
              <tr key={i}>
                <td style={styles.td}>{contact.fname}</td>
                <td style={styles.td}>{contact.lname}</td>
                <td style={styles.td}>{contact.dob}</td>
                <td style={styles.td}>{contact.phone}</td>
                <td style={styles.td}>{contact.email}</td>
                <td style={styles.td}>{contact.notes}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  contacts: PropTypes.array.isRequired,
  sortFirstName: PropTypes.func.isRequired,
  sortFirstNameValue: PropTypes.string.isRequired,
  sortLastName: PropTypes.func.isRequired,
  sortLastNameValue: PropTypes.string.isRequired,
}
