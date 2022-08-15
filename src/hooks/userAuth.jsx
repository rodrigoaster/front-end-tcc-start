import api from "../helpers/api";

import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify";

export const useAuth = () => {
    
    const [authenticated, setAuthenticated] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            api.defaults.headers.Authorizations = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
        
    }, [])

    const createUser = async (values) => {
        await api.post("/user/create", 
            {
                user_Name: values.name,
                user_CPF: values.cpf,
                user_Email: values.email,
                user_Password: values.pass,
                user_ConfirmPassword: values.confirmpass
            })
            .then((res) => {
                history.push('/login');
                toast.success(res.data.message)
                return
            }).catch((err) => {
                toast.error(err.response.data.message)
                return
            }) 
    }

    const authUser = async (data) => {
        localStorage.setItem('token', JSON.stringify(data));
        setAuthenticated(true)
        
        history.push('/');
    }

    

    const loginUser = async (values) => {
        await api.post("/user/login", 
            {
                user_Email: values.email,
                user_Password: values.pass
            })
            .then(async (res) => {
                authUser(res.data.token);
                toast.success(res.data.message);    
                history.push('/user');
                return
            }).catch((err) => {
                toast.error(err.res.data.message)
                return
            })
            
    }

    const logoutUser = async () => {
        setAuthenticated(false)

        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined;

        history.push('/');

        toast.success("Usuário deslogado com sucesso!")
    }

    return {authenticated, createUser, loginUser, logoutUser}
}