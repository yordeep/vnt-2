import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      About
      <Link to='/about/contact'>Contact</Link>
    </div>
  )
}

export default About
