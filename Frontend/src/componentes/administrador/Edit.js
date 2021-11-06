import React from 'react';

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavbarMotos } from "../navbar/NavbarMotos";

import { useDispatch} from 'react-redux';

import Swal from "sweetalert2";

import { eventStartUpdate } from '../../actions/auth';

import { useState } from "react";


export const Edit = () => {

    const dispatch = useDispatch();
    //id
    const  pathname = window.location.pathname
    const id = pathname.split('/')[2];
    //console.log(id)

    const initEvent = {
        id: id,
        name: "",
        email: "",
        rol: "",
        estado: "",
    }
    
    //Edicion

    const [formValues, setFormValues] = useState(initEvent);
    
    const { name, email, rol, estado } = formValues;


    const handleInputChange = ({ target }) => {
        setFormValues({
          ...formValues,
          [target.name]: target.value,
        });
      };

      const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(eventStartUpdate(formValues));
        //console.log(formValues);
        Swal.fire({
          title: "Usuario Actualizado",
          text: " ",
          icon: "success",
          confirmButtonText: "Super",
        }).then(function () {
          window.location = "/usuarios";
        });
      };

    return (
        <>
            <NavbarMotos />
            <Container className="product-container">
                <Row className="justify-content-md-center">
                <Col xs={5} className="regVentas-form">
                    <br />
                    <h1 className="text-center">Gestiona Usuarios</h1>
                    <br />
                    <Form onSubmit={handleSubmitForm}>
                    <Form.Group className="mb-3" controlId="formGroupCode">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                        type="text"
                        name="id"
                        defaultValue={id}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupCode">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                        type="text"
                        name="name"
                        placeholder="Ingrese nombre"
                        value={name}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                        type="text"
                        name="email"
                        placeholder="Ingrese correo"
                        value={email}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control
                        type="text"
                        name="rol"
                        placeholder="Ingrese rol"
                        value={rol}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                        type="text"
                        name="estado"
                        placeholder="Estado"
                        value={estado}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <br />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Button
                        type="submit"
                        variant="light"
                        className="float-end btnRegistro"
                        >
                        Actualizar
                        </Button>
                    </div>
                    <br />
                    <br />
                    </Form>
                </Col>
                </Row>
            </Container>
        </>
    )
}
