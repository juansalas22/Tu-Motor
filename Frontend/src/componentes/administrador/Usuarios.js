import React, { useEffect }  from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { NavbarMotos } from "../navbar/NavbarMotos";
import { Container, Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom";

import { eventStartLoading } from '../../actions/auth';

export const Usuarios = () => {

    //motos
    const dispatch = useDispatch();
    const { events  } = useSelector((state) => state.product);

    useEffect(() => {
        
        dispatch( eventStartLoading() );

    }, [ dispatch ])

    return (
        <>
            <NavbarMotos />
            <h1 className="text-center mt-5 mb-5">Usuarios</h1>
            <Container>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {events.map((usuario) => {
                    return (
                        <tr key={usuario._id}>
                        <td>{usuario._id}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.estado} </td> 
                        <td>
                        
                            <Link to={`/gestion/${usuario._id}`}>
                            <Button
                                variant="primary"
                                id={usuario._id}
                                className="ms-2"
                            >  
                                <i className="fas fa-user-edit"></i>
                            </Button>
                            </Link>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>
                </Table>
            </Container>
        </>
    )
}
