import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
const Buttons = () => {
  
    const [opc, setOpc] = useState(1);

    const handleClick = (event) => {
        if (opc === 1) {
            setOpc(-1);
        }else{
            setOpc(1);
        }
    }

    if(opc === 1){
        return (
            <Button onClick={handleClick} variant="success" className="float-end">Actualizar</Button>
        )
    }else{
        return (
            <React.Fragment>
                <Button onClick={handleClick} variant="success" className="float-end">Aceptar</Button>
                <Button onClick={handleClick} variant="secondary" className="float-end">Cancelar</Button>
            </React.Fragment>
        )
    }
    
}

export default Buttons;