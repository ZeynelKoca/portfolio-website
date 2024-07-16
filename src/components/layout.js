/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * 
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import ParticlesConfig from '../config/ParticlesConfig';
import { Analytics } from "@vercel/analytics/react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <>
      <Analytics />
      <Navbar />
      <main>
        <div className="particles">
          <Particles init={particlesInit} height="auto" width="100vw" options={ParticlesConfig} />
        </div>
        {children}
      </main>
    </>
  )
}

export default Layout