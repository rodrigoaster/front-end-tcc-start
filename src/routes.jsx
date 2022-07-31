import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CalculadoraConsumo } from './pages/calculo/calculo';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/calculo' exact component={CalculadoraConsumo}/>
            </Switch>
        </BrowserRouter>
    )
}
