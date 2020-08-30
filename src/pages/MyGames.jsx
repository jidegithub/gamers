import React from 'react'
import Helmet from 'react-helmet'
import Slider from "../components/Slider"

export default function MyGames() {
  return (
    <div className="flex justify-center">
      <Helmet title='collections'/>
      <Slider />
    </div>
  )
}
