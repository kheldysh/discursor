import React from 'react'
import { connect } from 'react-redux'
import { setNick } from '../actions'

let ChooseNick = ({ dispatch }) => {
  let input

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

ChooseNick = connect()(ChooseNick)

export default ChooseNick
