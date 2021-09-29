import React from 'react';
import Button from 'react-bootstrap/Button'
import ListarUsuarios from '../components/ListarUsuarios'

const Usuarios = () => {
    return(
        <div>
            <h2 className="mt-5">Listar Usuarios</h2>
            <Button variant="success" className="mt-4">Agregar</Button>
            <ListarUsuarios/>
        </div>
    );
}

export default Usuarios;