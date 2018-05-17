import React, { Component } from 'react'

import Body from './Body'

class NotFound extends Component {
  render () {
    return (
      <Body class="page not-found">
        <h1>Wut?!</h1>
        <p>What happened... Did you try to do something fishy?</p>
      </Body>
    )
  }
}

export default NotFound
