import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="header-wrapper" style={{marginTop: "10em"}}>
        <h1 style={{color: "#ededed"}}>404: Not Found</h1>
        <p>You know what 404 stands for... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
