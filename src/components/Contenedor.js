import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Navegador from './Navegador'
import ListarUsuarios from './ListarUsuarios'

const Contenedor = () => {
    return (
        <React.Fragment>
            <Container fluid height="100%">
                <Col xs={2} className="style-row">
                    <Navegador/>
                </Col>
                <Col>
                    <ListarUsuarios/>
                </Col>
            </Container>

        </React.Fragment>
    )
}

export default Contenedor;