import React from 'react'
import Helmet from 'react-helmet'

export default function NoMatch() {
  return (
    <div className="flex justify-center">
      <Helmet title='Not Found'/>
      no match 404
    </div>
  )
}
