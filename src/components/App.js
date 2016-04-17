import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>CommCell</h1>
        <h2>Communication made simple</h2>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/meeting">Meeting App</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})