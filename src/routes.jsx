import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/home/home';

import { Informacoes } from './pages/informacoes/informacoes';


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path='/' exact component={Home}/>
                <Route path='/informacoes' exect component={Informacoes}/>

            </Switch>
        </BrowserRouter>
    )
}
