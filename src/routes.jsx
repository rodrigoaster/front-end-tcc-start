import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { InfoEquipe } from './pages/infoEquipe/infoEquipe';

import { newSenha } from './pages/new-senha/new-senha';

import { Home } from './pages/home/home';

import { Informacoes } from './pages/informacoes/informacoes';


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/equipe' exact component={InfoEquipe}/>
                <Route path='/' exact component={Home}/>
                <Route path='/esqueciSenha' exact component={newSenha}/>
                <Route path='/informacoes' exect component={Informacoes}/>
            </Switch>
        </BrowserRouter>
    )
}
