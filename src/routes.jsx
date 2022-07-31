import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home/home';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
