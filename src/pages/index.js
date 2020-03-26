import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation.en"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import HowTo from '../components/sections/howto'

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
