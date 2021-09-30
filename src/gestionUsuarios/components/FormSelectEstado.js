import React from 'react';
import Form from 'react-bootstrap/Form'

const FormSelectEstado = ({opc}) => {
    if (opc){
        return (
            <Form.Select disabled="true" size="sm">
                <option>Activo</option>
                <option>Inactivo</option>
            </Form.Select>
        )
    }else{
        return (
            <Form.Select size="sm">
                <option>Activo</option>
                <option>Inactivo</option>
            </Form.Select>
        )
    }
}

export default FormSelectEstado;