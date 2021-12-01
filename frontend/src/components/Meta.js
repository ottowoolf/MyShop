import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: "Otto's E-Commerce",
  description: "Electronics and gadgets at great prices",
  keywords: "electronics, buy electronics, deal, sale, cheap electronics",
}

export default Meta
