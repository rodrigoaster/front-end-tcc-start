import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { InfoEquipe } from './pages/infoEquipe/infoEquipe';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/equipe' exact component={InfoEquipe}/>
            </Switch>
        </BrowserRouter>
    )
}
