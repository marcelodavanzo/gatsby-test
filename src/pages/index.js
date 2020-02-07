import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/my-first-post">Go to blog</Link>

    <Link to="/projects/mol-ad-specs">MailOnline Ad Specs</Link>
    <Link to="/projects/mol-showcase">MailOnline Showcase</Link>
    <Link to="/projects/mol-us-ad-sales">MailOnline US Ad Sales</Link>
    <Link to="/projects/adstream-costs">Adstream Costs</Link>
    <Link to="/projects/adstream-library">Adstream Library</Link>
    <Link to="/projects/adstream-wayfinder-design-system">
      Adstream Wayfinder Design System
    </Link>
    <Link to="/projects/adstream-indesign-plugin">
      Adstream InDesign Plugin
    </Link>

    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/404/">Go to 404 page</Link>
  </Layout>
)

export default IndexPage
