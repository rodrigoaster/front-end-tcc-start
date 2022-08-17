import { Header } from "../../components/header/header"
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from "formik";
import { toast, ToastContainer } from 'react-toastify';
import { useContext } from "react";
import { Context } from '../../context/auth/UserContext'


import * as yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'


export const Login = () => {

  const { loginUser } = useContext(Context)

  const handleClickLogin = async (user) => {
    loginUser(user);
  }

  const ValidationLogin = yup.object().shape({
    email: yup.string().email('Este email não se encontra registrado!').required('Este campo é obrigatório!'),
    pass: yup.string().required('Este campo é obrigatório!'),
  });

  
  return(
    <div>
        <Header/>
        <div className="bg-def d-flex justify-content-around extra-pt">
          <div class='container bg-light p-5 w-25 rounded mb-5 shadow p-3 mb-5 bg-body rounded'>
            <h1 className="text-center">LOGIN</h1>
              <Formik 
              initialValues={{}}
              onSubmit={handleClickLogin}
              validationSchema={ValidationLogin}
              >
                <Form>
                  <div className="mb-3">
                    <Field 
                      name="email" 
                      className="form-control" 
                      placeholder="Email"
                    />

                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>

                  <div className="mb-3">
                    <Field 
                      name="pass"
                      type="password" 
                      className="form-control" 
                      placeholder="Senha"
                    />

                    <ErrorMessage
                      component="span"
                      name="pass"
                      className="form-error"
                    />
                  </div>
                  <div className="d-flex justify-content-center"><button type="submit" className="btn btn-success">Entrar</button></div>
                </Form>
              </Formik>
            <div className="btn-area d-flex justify-content-center mt-5">
                <p className="extra-mr-5">Não possui conta?</p> 
                <Link id="signUpBtn" className="text-deco-none " to='/cadastro'>Cadastre-se</Link>  
            </div> 
            <div className="d-flex justify-content-center mt-2">
                <Link className="text-deco-none btn btn-danger" to='/esqueciSenha'>Esqueci minha senha</Link>  
            </div> 
          </div>

          <div class="img-logo">
            <img src="src/assets/img/logo/New-logo.png" alt="" width="500" height="500" className="d-inline-block align-text-top"/>
          </div>
        </div> 
        <ToastContainer/>
      <Footer/>
    </div>
  )
    
    
}