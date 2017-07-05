import React from 'react'
import { connect } from 'react-redux'
import { setNick } from '../actions'

let ChooseNick = ({ nick, dispatch }) => {
  let input
  if (!!nick) {
    return (
      <div>
        <h2>Hello, {nick}!</h2>
      </div>
    )
  }
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setNick(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Use this nick
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    nick: state.get('nick')
  }
}

ChooseNick = connect(
  mapStateToProps
)(ChooseNick)

export default ChooseNick
