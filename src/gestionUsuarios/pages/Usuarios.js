import React from 'react';
import ListaUsuarios from '../components/ListaUsuarios'
import Buttons from '../components/Buttons'

const Usuarios = () => {

    return(
        <div>
            <h2 className="mt-5">Listar Usuarios</h2>
            <ListaUsuarios />
            <Buttons/>
        </div>
    );
}

export default Usuarios;