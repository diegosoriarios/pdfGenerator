import React, { Component } from 'react'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Container, 
  Col, 
  Row, 
  Button,
  Form
} from 'react-bootstrap'
import './App.css';

class App extends Component {
  state = {
    nome: '',
    materia: '',
    titulo: '',
    conteudo: ''
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
        saveAs(pdfBlob, 'newPdf.pdf')
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">Generate PDF</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button variant="light" onClick={this.createAndDownloadPdf}>Download PDF</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <textarea name="conteudo" onChange={this.handleChange} value={this.state.conteudo}></textarea>
            </Col>
            <Col xs={6} md={4}>
              <br />
              <Form.Control type="text" placeholder="Matéria" name="materia" value={this.state.materia} onChange={this.handleChange} /><br />
              <Form.Control type="text" placeholder="Nome" name="nome" value={this.state.nome} onChange={this.handleChange} /><br />
              <Form.Control type="text" placeholDer="Titulo" name="titulo" value={this.state.titulo} onChange={this.handleChange} /><br />
              <Button variant="dark" onClick={this.createAndDownloadPdf}>Download PDF</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
