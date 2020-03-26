import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No encontrado" />
    <h1>No encontrado</h1>
    <p>Parece qué la página que búscas&#39;no existe...</p>
  </Layout>
)

export default NotFoundPage
