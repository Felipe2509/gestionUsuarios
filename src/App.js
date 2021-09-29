import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from './gestionUsuarios/pages/Usuarios'

const App = () => {
  return (
    <Router>
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
