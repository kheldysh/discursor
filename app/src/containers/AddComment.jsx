import React from 'react'
import { connect } from 'react-redux'
import { addLocalComment } from '../actions/comments'

let AddComment = ({ ownNick, addComment }) => {
  let input
  if (!ownNick) {
    return (
      <h2>Choose a nick and join the fray!</h2>
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
          addComment(ownNick, input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ownNick: state.get('nick')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (nick, text) => dispatch(addLocalComment(nick, text))
  }
}

AddComment = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment)

export default AddComment
