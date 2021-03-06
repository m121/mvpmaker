import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation.en"
import Privacidad from "../components/sections_es/privacidad"
import Footer from "../components/sections_es/footer"

const privacidad = () => (
  <Layout>
    <SEO title="Política de Privacidad" />
    <Navigation />
    <Privacidad/>
    <Footer />
  </Layout>
)

export default privacidad
