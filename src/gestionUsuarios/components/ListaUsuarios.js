import React from 'react';
import Table from 'react-bootstrap/Table';
import FormSelectEstado from './FormSelectEstado'
import FormSelectRol from './FormSelectRol'

const ListarUsuarios = () => {
    return (
      <React.Fragment>
            <Table fluid>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Usuario</th>
                  <th>Rol</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td><FormSelectRol /></td>
                  <td><FormSelectEstado /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td><FormSelectRol /></td>
                  <td><FormSelectEstado /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td><FormSelectRol /></td>
                  <td><FormSelectEstado /></td>
                </tr>
              </tbody>
            </Table>
          </React.Fragment>
    )
}

export default ListarUsuarios;