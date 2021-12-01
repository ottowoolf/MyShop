import React from "react"
import { Pagination } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination className="justify-content-center my-3">
        <LinkContainer
          to={
            !isAdmin
              ? keyword
                ? `/search/${keyword}/page/1`
                : `/page/1`
              : `/admin/productlist/1`
          }
        >
          <Pagination.First disabled={page === 1} />
        </LinkContainer>
        <LinkContainer
          to={
            !isAdmin
              ? keyword
                ? `/search/${keyword}/page/${page - 1}`
                : `/page/${page - 1}`
              : `/admin/productlist/${page - 1}`
          }
        >
          <Pagination.Prev disabled={page === 1} />
        </LinkContainer>

        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
            active={false}
          >
            <Pagination.Item key={x + 1}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
        <LinkContainer
          key={page + 1}
          to={
            !isAdmin
              ? keyword
                ? `/search/${keyword}/page/${page + 1}`
                : `/page/${page + 1}`
              : `/admin/productlist/${page + 1}`
          }
        >
          <Pagination.Next disabled={page === pages} />
        </LinkContainer>
        <LinkContainer
          to={
            !isAdmin
              ? keyword
                ? `/search/${keyword}/page/${pages}`
                : `/page/${pages}`
              : `/admin/productlist/${pages}`
          }
        >
          <Pagination.Last disabled={page === pages} />
        </LinkContainer>
      </Pagination>
    )
  )
}

export default Paginate
