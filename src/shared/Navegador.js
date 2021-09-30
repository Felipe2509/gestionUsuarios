import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./Shared.css"
const Navegador = () => {
    return (
        <React.Fragment>
            <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link className="color-text" eventKey="link-1">Inicio</Nav.Link>
            <Nav.Link className="color-text" eventKey="link-2">Ventas</Nav.Link>
            <Nav.Link className="color-text" eventKey="link-2">Vendedores</Nav.Link>
            <Nav.Link className="color-text" href="/home">Usuarios</Nav.Link>
            <Nav.Link className="color-text" eventKey="link-2">Cerrar Sesión</Nav.Link>
            </Nav>
        </React.Fragment>
    )
}

export default Navegador;