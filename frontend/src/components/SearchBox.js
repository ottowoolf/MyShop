import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const SearchBox = () => {
  const [keyword, setKeyword] = useState("")

  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }
  return (
    <Form onSubmit={submitHandler} className="d-flex ">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mx-2"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
