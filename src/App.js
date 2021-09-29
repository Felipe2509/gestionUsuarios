import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './shared/Navegador'
import Usuarios from './gestionUsuarios/pages/Usuarios'

const App = () => {
  return (
    <Router>
      <Navegador/>
      <Switch>
        <Route path="/" exact>
          <Usuarios/>
        </Route>
        <Redirect to="/" /> 
      </Switch>
    </Router>
  );
}

export default App;
