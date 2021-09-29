import React from 'react';
import Nav from 'react-bootstrap/Nav';
const Navegador = () => {
    return (
        <React.Fragment>
             <div><h2 className="text-center" color="white">WINNING TEAM</h2></div>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link color="white" eventKey="link-1">Inicio</Nav.Link>
              <Nav.Link eventKey="link-2">Ventas</Nav.Link>
              <Nav.Link eventKey="link-2">Vendedores</Nav.Link>
              <Nav.Link href="/home">Usuarios</Nav.Link>
              <Nav.Link eventKey="link-2">Cerrar Sesión</Nav.Link>
            </Nav>
        </React.Fragment>
    )
}

export default Navegador;