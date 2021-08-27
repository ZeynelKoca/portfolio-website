/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import Particles from 'react-particles-js';
import ParticlesConfig from '../config/ParticlesConfig';

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="particles">
          <Particles height="auto" width="100vw" params={ParticlesConfig} />
        </div>
        {children}
      </main>
    </>
  )
}

export default Layout