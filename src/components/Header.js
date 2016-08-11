import React from 'react'

const style = {
  main: {
    backgroundColor: '#EB6B25',
    height: '50px',
    color: '#FCEFE4',
    fontSize: '20px',
    fontWeight: '400',
    paddingTop: '30px',
    paddingLeft: '20px'
  },

  bottom: {
    backgroundColor: '#E2E2E2',
    opacity: 0.5,
    height: '20px',
    marginBottom: '40px'
  }

}

export default () =>
  <div>
    <div style={style.main}>
      Contacts Keeper
    </div>
    <div style={style.bottom}>
    </div>
  </div>
