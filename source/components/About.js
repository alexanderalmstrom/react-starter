import React, { Component } from 'react'

import Body from './Body'

class About extends Component {
  render () {
    return (
      <Body isDark={true} class="about">
        <h1>About</h1>
        <p>Wow this is really cool!</p>
      </Body>
    )
  }
}

export default About
