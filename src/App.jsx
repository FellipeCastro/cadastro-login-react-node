import * as yup from 'yup'

import './App.css'
import FormLogin from './components/FormLogin'
import FormCadastro from './components/FormCadastro'

function App() {

  // Login
  const handleClickLogin = (values) => {
    console.log(values)
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

  // Cadastro
  const handleClickCadastro = (values) => {
    console.log(values)
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

  return (
    <div className='container'>
      <FormLogin 
        handleClickLogin={handleClickLogin}
        validationLogin={validationLogin}
      />
      <hr />
      <FormCadastro 
        handleClickCadastro={handleClickCadastro}
        validationCadastro={validationCadastro}
      />
    </div>
  )
}

export default App
