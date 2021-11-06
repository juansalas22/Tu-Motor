import React, { useEffect }  from 'react';
import { useDispatch, useSelector} from 'react-redux';

import {Table} from "react-bootstrap";

import { eventStartLoading } from '../../../actions/registroMoto';

export const Lista = ({codigo}) => {
    //motos
    const dispatch = useDispatch();
    const { events  } = useSelector((state) => state.product);

    useEffect(() => {
        
        dispatch( eventStartLoading() );

    }, [ dispatch ])
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Valor</th>
                    <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {events.map((moto) => {
                    if(codigo === moto.codigo){
                        return (
                        <tr key={moto._id}>
                        <td>{moto._id}</td>
                        <td>{moto.codigo}</td>
                        <td>{moto.nombre}</td>
                        <td>{moto.descripcion}</td>
                        <td>{moto.valor} </td>
                        <td>{moto.disponible}</td>   
                        </tr>
                        );
                    }
                    
                    
                    })}
                </tbody>
            </Table>  
        </>
    )
}
