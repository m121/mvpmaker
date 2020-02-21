import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Terminos from "../components/sections/terminos"
import Footer from "../components/sections/footer"

const terminos = () => (
  <Layout>
    <SEO title="Terminos" />
    <Navigation />
    <Terminos/>
    <Footer />
  </Layout>
)

export default terminos
