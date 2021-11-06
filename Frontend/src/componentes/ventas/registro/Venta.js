import React, { useState } from 'react';
import { Form, Button, Row, Col, Container} from "react-bootstrap";

import { NavbarMotos } from "../../navbar/NavbarMotos";
//import { Lista } from './Lista';

//prueba

import { useEffect }  from 'react';
import { useDispatch, useSelector} from 'react-redux';

import {Table} from "react-bootstrap";

import { eventStartLoading } from '../../../actions/registroMoto';

//hacer el post

import { eventStartAddNew } from '../../../actions/registroVenta';
import Swal from "sweetalert2";

export const Venta = () => {

    //Buscar por codigo
    const [formCodigo, setCodigo] = useState({
        code: ""
    });
    const { code } = formCodigo;

    const obtenerCodigo = ({ target }) => {
        setCodigo({
          ...formCodigo,
          [target.name]: target.value,
        });
    };

    //motos
    const dispatch = useDispatch();
    const { events  } = useSelector((state) => state.product);

    useEffect(() => {
        
        dispatch( eventStartLoading() );

    }, [ dispatch ])

    //prueba de lista
    const prueba = events.map((moto) => {
        if(code === moto.codigo){
            
                return (
                    {
                        id: moto._id,
                        codigo: moto.codigo,
                        nombre: moto.nombre,
                        descripcion: moto.descripcion,
                        valor: moto.valor,
                        disponible: moto.disponible

                    }
                )
        }
    })                           
            
    //Guardar
    
    const [formValues, setFormValues] = useState({
        idCliente: "",
        fecha: "",
        nombreCliente: "",
        documento: "",
        prueba,
        nombreVendedor: "",
        total: 0,
        
    });
    
    const { idCliente, fecha, nombreCliente, documento, nombreVendedor, total } = formValues;
    
    const obtener = ({ target }) => {
        setFormValues({
          ...formValues,
          [target.name]: target.value,
        });
    };

    //registro
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(eventStartAddNew(formValues));
        console.log(formValues);
        Swal.fire({
          title: "Motor Registrado",
          text: " ",
          icon: "success",
          confirmButtonText: "Super",
        }).then(function () {
          window.location = "/venta";
        });
      };
    
    return (
        <>
           <NavbarMotos />
           <Container>
            <Row>
                <Col xs={12}>
                    <br />
                    <h1 className="text-center">Registra Tu Venta</h1>
                    <br />
                    <Form onSubmit={handleSubmitForm}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>ID Venta</Form.Label>
                            <Form.Control 
                                placeholder="Ingrese ID de la venta"
                                name="idCliente"
                                value={idCliente}
                                onChange={obtener} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control 
                                type="date"
                                name="fecha"
                                value={fecha}
                                onChange={obtener}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNombre">
                            <Form.Label>Nombre del cliente</Form.Label>
                            <Form.Control 
                                placeholder="Ingrese el nombre"
                                name="nombreCliente"
                                value={nombreCliente}
                                onChange={obtener}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDocumento">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control 
                                placeholder="Ingrese el documento"
                                name="documento"
                                value={documento}
                                onChange={obtener}    
                                />
                            </Form.Group>
                        </Row>

                            <Form>
                                <Row className="align-items-center">
                                    <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName">
                                        Codigo
                                    </Form.Label>
                                    <Form.Control 
                                        id="inlineFormInputName"
                                        placeholder="Codigo del Motor"
                                        name="code"
                                        value={code}
                                        onChange={obtenerCodigo}
                                     />
                                    </Col>
                                </Row>
                            </Form>
                        <br/>
                        {/* <Lista
                            codigo={codigo}
                        /> */}
                        <Table id="Tabla1" striped bordered hover >
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
                                if(code === moto.codigo){
                                    
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
                        <br/>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridVendedor">
                            <Form.Label>Nombre del vendedor</Form.Label>
                            <Form.Control 
                                placeholder="Ingrese el nombre"
                                name="nombreVendedor"
                                value={nombreVendedor}
                                onChange={obtener}   
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTotal">
                            <Form.Label>Total</Form.Label>
                            <Form.Control
                                name="total"
                                value={total}
                                onChange={obtener}   
                            />
                            </Form.Group>
                        </Row>
                        <br/>
                        <Button
                            type="submit"
                            variant="light"
                            className="float-end btnRegistro"
                        >
                            Registrar
                        </Button>
                    </Form>
                </Col>
            </Row>    
           </Container>     
        </>
    )
}
