import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <Container>
        <Row>
          <Col className='text-center py-3 text-light'>
            Copyright &copy; My Shop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
