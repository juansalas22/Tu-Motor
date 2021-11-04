import React, { useEffect }  from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { NavbarMotos } from "../../navbar/NavbarMotos";
import { Container, Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom";

import { eventStartLoading } from '../../../actions/registroMoto';

export const Gestion = () => {

    //motos
    const dispatch = useDispatch();
    const { events  } = useSelector((state) => state.product);

    useEffect(() => {
        
        dispatch( eventStartLoading() );

    }, [ dispatch ])

    return (
     <>
       <NavbarMotos />
       <h1 className="text-center mt-5 mb-5">Gestiona Tu Motor</h1>
       <Container>
         <Table striped bordered hover>
           <thead>
             <tr>
               <th>ID</th>
               <th>Codigo</th>
               <th>Nombre</th>
               <th>Descripcion</th>
               <th>Valor</th>
               <th>Estado</th>
               <th>Editar</th>
             </tr>
           </thead>
           <tbody>
             
             {events.map((moto) => {
               return (
                 <tr key={moto._id}>
                   <td>{moto._id}</td>
                   <td>{moto.codigo}</td>
                   <td>{moto.nombre}</td>
                   <td>{moto.descripcion}</td>
                   <td>{moto.valor} </td>
                   <td>{moto.disponible}</td>   
                   <td>
                   
                     <Link to={`/gestion/${moto._id}`}>
                       <Button
                         variant="primary"
                         id={moto._id}
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
