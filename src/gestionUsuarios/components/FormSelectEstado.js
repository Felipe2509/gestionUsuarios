import Form from 'react-bootstrap/Form'

const FormSelectEstado = () => {
    return (
        <Form.Select size="sm">
            <option>Activo</option>
            <option>Inactivo</option>
        </Form.Select>
    )
}

export default FormSelectEstado;