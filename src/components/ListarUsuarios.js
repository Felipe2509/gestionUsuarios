import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Buttons from './Buttons'

const ListarUsuarios = () => {
    return (
      <React.Fragment>
            <div><h2>Listado de Usuarios</h2></div>
            <Button variant="success">Agregar</Button>{' '}
            <Table fluid>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><Buttons /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><Buttons /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td><Buttons /></td>
                </tr>
              </tbody>
            </Table>
          </React.Fragment>
    )
}

export default ListarUsuarios;