import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Informacoes } from './pages/informacoes/informacoes';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/informacoes' exect component={Informacoes}/>
            </Switch>
        </BrowserRouter>
    )
}
