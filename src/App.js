import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  Row,
  Container,
  Col
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegador from './shared/Navegador'
import Usuarios from './gestionUsuarios/pages/Usuarios'

const App = () => {
  return (
    <Router>
      <Container fluid='false' className="container-size">
        <Row>
          <Col xs={2} className="bg-color">
            <h2>Winning Team</h2>
          <Navegador/>
          </Col>
          <Col>
            <Container>
              <Switch>
                <Route path="/" exact>
                  <Usuarios/>
                </Route>
                <Redirect to="/" /> 
              </Switch>
            </Container> 
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
