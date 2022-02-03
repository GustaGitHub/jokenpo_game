import InitialPage from "./pages/menu"
import Game from './pages/game'
import './styles/body.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={InitialPage}/>
            <Route exact path="/jogar/:nameParam" component={Game}/>
            <Route path="*" component={InitialPage}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
