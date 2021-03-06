import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO description="Software Developer Portfolio" title="Zeynel Koca - Software Developer Portfolio" />
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage