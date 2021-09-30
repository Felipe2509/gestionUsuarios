import React from 'react';
import Button from 'react-bootstrap/Button';
const Buttons = ({opcion, setOpcion}) => {
  
    const update = () => {
        setOpcion(false);
      };
    
      const accept = () => {
        setOpcion(true);
      };

    if(opcion) {
        return (
            <Button onClick={update} variant="success" className="float-end">Actualizar</Button>
        )
    }else{
        return (
            <React.Fragment>
                <Button onClick={accept} variant="success" className="float-end">Aceptar</Button>
                <Button onClick={accept} variant="secondary" className="float-end me-3">Cancelar</Button>
            </React.Fragment>
        )
    }
    
}

export default Buttons;