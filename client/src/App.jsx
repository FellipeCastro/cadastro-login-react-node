import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import * as yup from 'yup'
import axios from 'axios'

import FormLogin from './components/FormLogin'
import FormCadastro from './components/FormCadastro'

import './App.css'

function App() {

    // Cadastro
    const handleClickCadastro = (values) => {
      axios.post('http://localhost:3001/register', {
        email: values.email,
        password: values.password
      })
      .then((res) => {
        console.log(res)
      })
    }
  
    const validationCadastro = yup.object().shape({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("Este campo é obrigatório"),
      password: yup
        .string()
        .min(8, "A senha deve ter, no mínimo, 8 caracteres")
        .required("Este campo é obrigatório"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "As senhas não são iguais")
    })

  // Login
  const handleClickLogin = (values) => {
    axios.post('http://localhost:3001/login', {
      email: values.email,
      password: values.password
    })
    .then((res) => {
      console.log(res)
    })
  }

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter, no mínimo, 8 caracteres")
      .required("Este campo é obrigatório"),
  })

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <FormCadastro 
              handleClickCadastro={handleClickCadastro}
              validationCadastro={validationCadastro}
            />
          } />

          <Route path='/login' element={
            <FormLogin 
              handleClickLogin={handleClickLogin}
              validationLogin={validationLogin}
            />            
          } />
        </Routes>
      </div>      
    </Router>


  )
}

export default App
