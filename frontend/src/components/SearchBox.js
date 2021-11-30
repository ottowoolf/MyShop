import React, { useState } from "react"
import { Form, Button, FormGroup } from "react-bootstrap"
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
    <Form onSubmit={submitHandler}>
      <FormGroup className=" d-flex bg-primary px-4 pb-3 w-100  mx-auto ">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mx-3 rounded"
        ></Form.Control>
        <Button type="submit" variant="outline-light" className="pb-2 rounded">
          Search
        </Button>
      </FormGroup>
    </Form>
  )
}

export default SearchBox
