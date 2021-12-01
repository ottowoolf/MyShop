import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import { listProducts } from "../actions/productActions"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Paginate from "../components/Paginate"
import ProductCarousel from "../components/ProductCarousel"
import Meta from "../components/Meta"
import { Link } from "react-router-dom"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
  return (
    <>
      <Meta title="Otto's E-Commerce | Home" />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-dark">
          Go Back
        </Link>
      )}
      <h1>Latest products</h1>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={4} lg={3} key={product._id} className="my-2">
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            kayword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
