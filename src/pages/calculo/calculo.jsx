import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";  
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { toast } from "react-toastify";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

import api from "../../helpers/api";
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css'
import './calculo.css'

export const CalculadoraConsumo = () => {

    const validationCalc = yup.object().shape({
        potencia: yup.number().required('Este campo é obrigatório!'),

        quant: yup.number().required('Este campo é obrigatório!'),

        quantHours: yup.number().required('Este campo é obrigatório!'),

        quantDays: yup.number().required('Este campo é obrigatório!'),
    })


    const token = localStorage.getItem('token');

    const [ calc, setCalc ] = useState("");
    const [ user, setUser ] = useState("");
    const history = useHistory();
    // const [ viewCalc, setViewCalc ] = useState(false);

    // useEffect(() => {
    //     api.get("/calcs", {
    //         headers: {
    //             Authorization: `Bearer ${JSON.parse(token)}`
    //         }
    //     }).then((res) => {
    //         setCalc(res.data)
    //     })

    //     api.get("/user", {
    //         headers: {
    //             Authorization: `Bearer ${JSON.parse(token)}`
    //         }
    //     }).then((res) => {
    //         setUser(res.data)
    //     })
    // }, setTImeOut)


    const handleSubmit = async (values) => {
        const valuesUser = {
            calc_Eletro: values.eletro,
            calc_QuantEletro: values.quant,
            calc_Potencia: values.potencia,
            calc_QuantHours: values.quantHours,
            calc_QuantDays: values.quantDays
        }

        api.post("/calc/create", valuesUser,{
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((res) => {
            history.push('/calculo')
            toast.success(res.data.message)
            return
        }).catch((err) => {
            toast.error(err.res.data.message)
            return
        })
    }

    

    return (
        <section>
            <Header/>
            <main id="bg1" className="d-flex justify-content-between">
                <div class='container shadow p-3 mt-5 mb-5 bg-body rounded p-5 w-25 rounded mb-5 w-45 '>
                            <h1 class="text-center">Calculadora de Consumo</h1>
                                <Formik 
                                initialValues={{}}
                                onSubmit={handleSubmit}
                                validationSchema={validationCalc}
                                >
                                <Form>
                                    <div class="mb-3">
                                        <Field name="eletro" class="form-control" placeholder="Eletrodoméstico"/>

                                        <ErrorMessage component="span" name="eletro" class="form-error"/>
                                    </div>
                                    <div class="mb-3">
                                        <Field name="potencia" class="form-control" type="number" placeholder="Potência"/>

                                        <ErrorMessage component="span" name="potencia" class="form-error"/>
                                    </div>

                                    <div class="mb-3">
                                        <Field name="quant" class="form-control" type="number" placeholder="Quantidade/Eletrodoméstico"/>

                                        <ErrorMessage component="span" name="quant" class="form-error"/>
                                    </div>

                                    <div class="mb-3">
                                        <Field name="quantHours" className="form-control" type="number" placeholder="Quantidade/Horas"/>

                                        <ErrorMessage component="span" name="quantHours" class="form-error"/>
                                    </div>

                                    <div class="mb-3">
                                        <Field name="quantDays" class="form-control" type="number" placeholder="Quantidade/Dias"/>

                                        <ErrorMessage component="span" name="quantDays" class="form-error"/>
                                    </div>

                                    <div class="d-flex justify-content-center mt-5"><button type="submit" class="btn btn-success">Cadastrar</button></div>
                                </Form>
                                </Formik>
                            
                        </div>


                    <div id="bg2" className="extra-padd">
                        
                    <table class="table">
                        <thead className="table-light border">
                            <tr>
                            <th scope="col">N do registro</th>
                            <th scope="col">Nome Completo</th>
                            <th scope="col">Eletrodoméstico</th>
                            <th scope="col">Potência</th>
                            <th scope="col">Horas/Dia</th>
                            <th scope="col">Dias/Mês</th>
                            <th scope="col">Consumo</th>
                            <th scope="col">Valor em R$</th>
                            </tr>
                        </thead>
                        <tbody className="extra-bg-light border">
                            <tr>
                                <td>1</td>
                                <td>Rodrigo Santana Leão</td>
                                <td>Ventilador</td>
                                <td>90W</td>
                                <td>9</td>
                                <td>30</td>
                                <td>43 KW/H</td>
                                <td>R$32</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
            </main>
            <Footer/>
    </section>
    )
}
