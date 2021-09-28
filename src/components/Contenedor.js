import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navegador from './Navegador'
import ListarUsuarios from './ListarUsuarios'

const Contenedor = () => {
    return (
        <div>
            <Container fluid height="100%">
                <Row>
                <Col xs={2} className="style-row">
                    <Navegador/>
                </Col>
                <Col>
                    <ListarUsuarios/>
                </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Contenedor;