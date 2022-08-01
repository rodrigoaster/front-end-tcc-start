import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CalculadoraConsumo } from './pages/calculo/calculo';

import { Sobre } from './pages/sobre/sobre';

import { Cadastro } from './pages/cadastro/cadastro';

import { Login } from './pages/login/login'

import { InfoEquipe } from './pages/infoEquipe/infoEquipe';

import { newSenha } from './pages/new-senha/new-senha';

import { Home } from './pages/home/home';

import { Informacoes } from './pages/informacoes/informacoes';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/calculo' exact component={CalculadoraConsumo}/>
                <Route path='/sobre' exact component={Sobre}/>
                <Route path='/cadastro' exact component={Cadastro}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/equipe' exact component={InfoEquipe}/>
                <Route path='/' exact component={Home}/>
                <Route path='/esqueciSenha' exact component={newSenha}/>
                <Route path='/informacoes' exect component={Informacoes}/>
            </Switch>
        </BrowserRouter>
    )
}
