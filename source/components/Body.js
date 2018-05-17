import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Body extends Component {
  componentDidMount() {
    document.body.classList.toggle('is-dark', this.props.isDark)
    document.body.classList.add(this.props.class)
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('is-dark', nextProps.isDark)
  }

  componentWillUnmount() {
    document.body.classList.remove('is-dark')
    document.body.classList.remove(this.props.class)
  }
  
  render() {
    return (
      <div className="main">
        {this.props.children}
      </div>
    )
  }
}

Body.defaultProps = {
  isDark: false,
  class: ""
}

Body.propTypes = {
  isDark: PropTypes.bool,
  class: PropTypes.string
}

export default Body
