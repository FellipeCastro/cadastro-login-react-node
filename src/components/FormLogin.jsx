import { Formik, Form, Field, ErrorMessage } from 'formik'

function FormLogin({ handleClickLogin, validationLogin }) {
    return (
        <>
            <h1>Login</h1>
            <Formik 
                initialValues={{}} 
                onSubmit={handleClickLogin} 
                validationSchema={validationLogin}
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

                <button type='submit' className='button'>Login</button>
                </Form>
            </Formik>
        </>
    )
}

export default FormLogin
