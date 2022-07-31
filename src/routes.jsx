import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Perfil } from './pages/perfil-usuraio/perfil';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/perfil' component={Perfil}/>
            </Switch>
        </BrowserRouter>
    )
}
