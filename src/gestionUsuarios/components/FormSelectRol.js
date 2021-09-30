import Form from 'react-bootstrap/Form'

const FormSelectEstado = () => {
    return (
        <Form.Select size="sm" className="form-width">
            <option>Administrador</option>
            <option>Vendedor</option>
        </Form.Select>
    )
}

export default FormSelectEstado;