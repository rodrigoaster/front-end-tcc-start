import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { newSenha } from './pages/new-senha/new-senha';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/esqueci-senha' exact component={newSenha}/>
            </Switch>
        </BrowserRouter>
    )
}
