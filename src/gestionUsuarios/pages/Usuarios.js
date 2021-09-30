import React, {useState} from 'react';
import ListaUsuarios from '../components/ListaUsuarios'
import Buttons from '../components/Buttons'

const Usuarios = () => {
    const [visible, setVisible] = useState(true);


    return(
        <React.Fragment>
            <h2 className="mt-5">Listar Usuarios</h2>
            <ListaUsuarios 
                opcion={visible}
                />
            <Buttons 
                opcion={visible} 
                setOpcion={setVisible}
                />
        </React.Fragment>
    );
}

export default Usuarios;