import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
                
                    <div><h2>Listado de Usuarios</h2></div>
                    <Button variant="success">Agregar</Button>{' '}
                    <ListarUsuarios/>
                </Col>
            </Container>

        </React.Fragment>
    )
}

export default Contenedor;