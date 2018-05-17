import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Body extends Component {
  componentDidMount() {
    document.body.classList.toggle('is-dark', this.props.isDark)
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('is-dark', nextProps.isDark)
  }

  componentWillUnmount() {
    document.body.classList.remove('is-dark')
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
  isDark: false
}

Body.propTypes = {
  isDark: PropTypes.bool
}

export default Body
