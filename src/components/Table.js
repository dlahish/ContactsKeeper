import React, { Component, PropTypes } from 'react'

const styles = {
  table: {
    margin: '40px auto',
    border: '1px solid grey',
    width: '100%'
  },
  tr: {
    border: '1px solid grey',
    background: '#4d4d4d',
    color: 'white'
  },
  th: {
    border: '1px solid grey',
    paddingLeft: '15px',
    width: '160px'
  }
}

export default class Table extends Component {
  render() {
    return (
      <table style={styles.table}>
        <thead>
          <tr style={styles.tr}>
            <td style={styles.th}>First Name</td>
            <td style={styles.th}>Last Name</td>
            <td style={styles.th}>Date of Birth</td>
            <td style={styles.th}>Phone</td>
            <td style={styles.th}>Email</td>
            <td style={styles.th}>Notes</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
}

Table.propTypes = {
  contacts: PropTypes.array.isRequired
}
