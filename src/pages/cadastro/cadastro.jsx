import { Header } from '../../components/header/header'
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { Context } from '../../context/auth/UserContext';
import { useContext } from 'react';


import * as yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './cadastro.css'
import 'react-toastify/dist/ReactToastify.min.css'


export const Cadastro = () => {

    const { createUser } = useContext(Context)

    const validationRegister = yup.object().shape({
        name: yup.string().min(16, 'Este campo deve conter no mínimo 16 caractéres').required('Este campo é obrigatório!'),

        cpf: yup.string().max(11, 'Este campo deve conter 11 caractéres!').required('Este campo é obrigatório!'),

        email: yup.string().email('Email inválido, tente novamente.').required('Este campo é obrigatório!'),

        pass: yup.string().required('Este campo é obrigatório!'),

        confirmpass: yup.string().oneOf([yup.ref("pass"), null], "As senhas não estão iguais!")
    })


    const handleClickRegister = async (user) => {
        createUser(user)
    }


    return (
        <div>
            <Header/>
            <main class="bg-def pt-5 pb-5">
                <div class="extra-pt ">
                        <div class='container bg-light p-5 w-50 rounded mb-5'>
                        <h1 class="text-center">Cadastro</h1>
                            <Formik 
                            initialValues={{}}
                            onSubmit={handleClickRegister}
                            validationSchema={validationRegister}
                            >
                            <Form>
                                <div class="mb-3">
                                    <Field name="name" class="form-control" placeholder="Nome completo"/>

                                    <ErrorMessage component="span" name="name" class="form-error"/>
                                </div>

                                <div class="mb-3">
                                    <Field name="cpf" class="form-control" placeholder="CPF"/>

                                    <ErrorMessage component="span" name="cpf" class="form-error"/>
                                </div>

                                <div class="mb-3">
                                    <Field name="email" className="form-control" placeholder="Email"/>

                                    <ErrorMessage component="span" name="email" class="form-error"/>
                                </div>

                                <div class="mb-3">
                                    <Field name="pass" class="form-control" type="password"  placeholder="Senha"/>

                                    <ErrorMessage component="span" name="pass" class="form-error"/>
                                </div>

                                <div class="mb-3">
                                    <Field name="confirmpass" type="password"  class="form-control" placeholder="Confirme a senha" />

                                    <ErrorMessage component="span" name="confirmpass" class="form-error"/>
                                </div>


                                <div class="d-flex justify-content-center mt-5"><button type="submit" class="btn btn-success">Cadastrar</button></div>
                            </Form>
                            </Formik>
                        <div class="btn-area d-flex justify-content-center mt-5">
                            <p class="extra-mr-5">Já possui conta?</p> 
                            <Link id="signUpBtn" class="text-deco-none " to='/login'>Conecte-se</Link>  
                        </div> 
                        <div class="d-flex justify-content-center mt-2">
                            <Link class="text-deco-none btn btn-danger" to='/esqueciSenha'>Esqueci minha senha</Link>  
                        </div> 
                    </div>
                </div> 
            </main>
            <ToastContainer/>
            <Footer/>
        </div>
    )
}

