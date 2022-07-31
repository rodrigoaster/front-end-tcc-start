import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Sobre } from './pages/sobre/sobre';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/sobre' exact component={Sobre}/>
            </Switch>
        </BrowserRouter>
    )
}
