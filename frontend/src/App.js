import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <h1>Welcome to My E-Commerce</h1>
        </Container>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
