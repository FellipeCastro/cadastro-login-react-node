import {Link} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function FormCadastro({ handleClickCadastro, validationCadastro }) {
    return (
        <>
            <h1>Cadastre-se</h1>
            <Formik 
                initialValues={{}}
                onSubmit={handleClickCadastro} 
                validationSchema={validationCadastro}
            >
                <Form className='login-form' autoComplete='off'>
                <div className="login-form-group">
                    <Field name="email" className="form-field" placeholder="Email" />

                    <ErrorMessage 
                    component='span'
                    name='email'
                    className='form-error'
                    />
                </div>

                <div className="login-form-group">
                    <Field name="password" className="form-field" placeholder="Senha" />

                    <ErrorMessage 
                    component='span'
                    name='password'
                    className='form-error'
                    />
                </div>

                <div className="login-form-group">
                    <Field name="confirmPassword" className="form-field" placeholder="Confirme sua senha" />

                    <ErrorMessage 
                    component='span'
                    name='confirmPassword'
                    className='form-error'
                    />
                </div>

                <button type='submit' className='button'>Cadastre-se</button>

                <p className='link'>Já tem uma conta? <Link to='/login'>Entre agora!</Link> </p>
                </Form>
            </Formik>
        </>
    )
}

export default FormCadastro
