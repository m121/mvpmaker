import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Privacidad from "../components/sections/privacidad"
import Footer from "../components/sections/footer"

const privacidad = () => (
  <Layout>
    <SEO title="Política de Privacidad" />
    <Navigation />
    <Privacidad/>
    <Footer />
  </Layout>
)

export default privacidad
