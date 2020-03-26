import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections_es/header"
import Features from "../components/sections_es/features"
import Footer from "../components/sections_es/footer"
import GetStarted from "../components/sections_es/getstarted"
import HowTo from '../components/sections_es/howto'

const IndexPage = () => (
  <Layout>
    <SEO title="MVP maker" />
    <Navigation />
    <Header />
    <Features />
    <HowTo/>
     <GetStarted/>
    <Footer />
  </Layout>
)

export default IndexPage
