import React, { Component } from 'react';
import axios from 'axios'
import { saveAs } from 'file-saver'
import './App.css';

class App extends Component {
  state = {
    nome: '',
    materia: '',
    titulo: '',
    conteudo: ''
  }

  handleChange = ({target: {value, name}}) => {
    this.setState({[name]: value})
  }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('/fetch-pdf', {responseType: 'blob'}))
      .then((res) => {
        const pdfBlob = new Blob([res.data], {type: 'application/pdf'})
        saveAs(pdfBlob, 'newPdf.pdf')
      })
  }

  render() {
    return (
      <div className="App">
        <div className="right">
          <input type="text" placeholder="Matéria" name="materia" value={this.state.materia} onChange={this.handleChange}/><br />
          <input type="text" placeholder="Nome" name="nome" value={this.state.nome} onChange={this.handleChange}/><br />
          <input type="text" placeholDer="Titulo" name="titulo" value={this.state.titulo} onChange={this.handleChange}/><br />
          <button onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
        <textarea name="conteudo" onChange={this.handleChange} value={this.state.conteudo}></textarea>
      </div>
    );
  }
}

export default App;
