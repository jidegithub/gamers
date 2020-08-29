import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

  const NavigationLink = styled.div`
  a {
    transition: color 0.2s, border-bottom-color 0.2s;
    color: ${props => props.active ? '#0000ff' : '#666'};
    text-decoration: none;
    border: 1px solid;
    padding: .6rem 1.5rem;
    border-radius: 9999px;
    border-color: ${props => props.active ? 'rgba(0, 0, 255, 0.1)' : 'transparent'};
    background-color: ${props => props.active ? '#e2e8f0' : 'transparent'};
    &:hover, &:active, &:focus {
      color: ${props => props.active ? '#0000ff' : '#222'};
    }
  }
`

export default ({ path, exact, ...props }) => (
  <Route path={path} exact={exact} children={({ match }) => (
    <NavigationLink active={match}>
      <Link to={path}>{props.title}</Link>
    </NavigationLink>
  )} />
)

