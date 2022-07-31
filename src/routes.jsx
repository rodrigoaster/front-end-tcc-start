import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Cadastro } from './pages/cadastro/cadastro';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/cadastro' exact component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    )
}
