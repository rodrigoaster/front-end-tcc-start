import { useState, useEffect } from "react";
import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import * as yup from 'yup';
import api from "../../helpers/api";

import 'bootstrap/dist/css/bootstrap.min.css';
import './userInfo.css'

const validationUpdate = yup.object().shape({
  name: yup.string().min(16, 'Este campo deve conter no mínimo 16 caractéres').required('Este campo é obrigatório!'),

  cpf: yup.string().max(11, 'Este campo deve conter 11 caractéres!').required('Este campo é obrigatório!'),

  email: yup.string().email('Email inválido, tente novamente.').required('Este campo é obrigatório!'),
})




export const Perfil = () => {

  const [ user, setUser ] = useState({})
  const [ token ] = useState(localStorage.getItem('token') || '')
  const [ update, setUpdate ] = useState(false);

  useEffect(() => {
    api.get('/user/checkUser', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((res)=> {
      setUser(res.data)
    });

  }, [token])

  const handleChangeArea = () => {
    setUpdate(true)
  }

  const handleChangeValues = (values) => {
    console.log('whatever')
  }

    

  return (
    <div>
        <Header/>
          <section className="bg">
          <div class='container bg-light p-5 w-50 rounded mb-5'>
            <h1 class="text-center">Meu Perfil</h1>
            <div class="d-flex justify-content-center m-5">
              <input type="file" />
            </div>
            {
              update ? 
              (<>
              <Formik initialValues={{}} onSubmit={handleChangeValues} validationSchema={validationUpdate}>
                <Form>
                    <div class="mb-3">
                        <Field name="name" class="form-control" placeholder="Nome completo" value={user.user_Name || ''}/>

                        <ErrorMessage component="span" name="name" class="form-error"/>
                    </div>

                    <div class="mb-3">
                        <Field name="cpf" class="form-control" placeholder="CPF" value={user.user_CPF|| ''}/>

                        <ErrorMessage component="span" name="cpf" class="form-error"/>
                    </div>

                    <div class="mb-3">
                        <Field name="email" className="form-control" type="email" placeholder="Email" value={user.user_Email || ''}/>

                        <ErrorMessage component="span" name="email" class="form-error"/>
                    </div>

                    <div class="d-flex justify-content-center"><button type="submit" class="btn btn-success" >Alterar cadastro</button></div>
                    
                    </Form>
                  </Formik>
              </>) : 
              (<>
                  <div class="text-center">
                    <div>
                      <h3>Nome:</h3>
                      <p>{user.user_Name}</p>
                    </div>
                    <div>
                      <h3>CPF:</h3>
                      <p>{user.user_CPF}</p>
                    </div>
                    <div>
                      <h3>Email:</h3>
                      <p>{user.user_Email}</p>
                    </div>
                  </div>

                  <div class="d-flex justify-content-around mt-5">
                  <button type="submit" class="btn btn-success" onClick={handleChangeArea}>Alterar cadastro</button> <Link to='/' class="btn btn-primary">Alterar senha</Link> 
            </div>
              </>)
            }

            
              
            </div>
          </section>
        <Footer/>
    </div>
  )
}