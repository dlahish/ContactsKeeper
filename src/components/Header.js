import React from 'react'

const style = {
  main: {
    backgroundColor: '#ff751a',
    height: '50px',
    color: '#f2f2f2',
    fontSize: '20px',
    fontWeight: '400',
    paddingTop: '30px',
    paddingLeft: '20px'
  },

  bottom: {
    backgroundColor: 'grey',
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
