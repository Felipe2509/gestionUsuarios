import Form from 'react-bootstrap/Form'

const FormSelectRol = ({opc}) => {
    if (opc){
        return (
            <Form.Select disabled="true" size="sm">
                <option>Administrador</option>
                <option>Vendedor</option>
            </Form.Select>
        )
    }else{
        return (
            <Form.Select size="sm">
                <option>Administrador</option>
                <option>Vendedor</option>
            </Form.Select>
        )
    }
    
}

export default FormSelectRol;