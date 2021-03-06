// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container for adding subreddit for subreddit scraper
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react'
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { addSubredditButton } from '../actions/index.js'
// ----------------------------------------------------------------------------

// Add Todo Container ---------------------------------------------------------
const AddSubreddit = ({ dispatch }) => {
  let input

  return (
    <div>

      { /* Subreddit Input Form */ }
      <form className = "form-inline" onSubmit = { e => {
          e.preventDefault()
          if (!input.value.trim()) {                                            // If input is white space
            return                                                              // Return null and do not dispatch action
          }
          dispatch(addSubredditButton(input.value))                             // Dispatch action to add subreddit name
          input.value = ''                                                      // Reset input value to empty string
        }}
      >

        { /* Input Field */ }
        <input className = "form-control" placeholder = "/r/" ref = { node =>
          input = node}
        />

        { /* Submit Button */ }
        <button className = "btn btn-outline-primary" type="submit">
          Add Subreddit
        </button>
      </form>
    </div>
  )
}
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect()(AddSubreddit)
// ----------------------------------------------------------------------------
