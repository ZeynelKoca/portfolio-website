/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * 
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Particles, { initParticlesEngine} from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import ParticlesConfig from '../config/ParticlesConfig';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  useEffect(() => {
    const loadParticles = async () => {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
    };
    
    loadParticles();
  }, []);

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Navbar />
      <main>
        <div className="particles">
          <Particles 
            id="tsparticles"
            options={ParticlesConfig}
          />
        </div>
        {children}
      </main>
    </>
  )
}

export default Layout