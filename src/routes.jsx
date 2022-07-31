import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/login/login'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}
