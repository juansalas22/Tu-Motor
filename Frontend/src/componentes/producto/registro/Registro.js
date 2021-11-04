import React, { useState } from "react";

import { NavbarMotos } from "../../navbar/NavbarMotos";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { eventStartAddNew } from "../../../actions/registroMoto";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";

export const Registro = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    valor: 0,
    disponible: "",
  });

  const { codigo, nombre, descripcion, valor, disponible } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

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
      window.location = "/gestion";
    });
  };
  return (
    <>
      <NavbarMotos />
      <Container className="product-container">
        <Row className="justify-content-md-center">
          <Col xs={5} className="regVentas-form">
            <br />
            <h1 className="text-center">Registra Tu Motor</h1>
            <br />
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3" controlId="formGroupCode">
                <Form.Label>Codigo</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  placeholder="Ingrese codigo"
                  value={codigo}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="Ingrese nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  name="descripcion"
                  placeholder="Ingrese descripcion"
                  value={descripcion}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupValue">
                <Form.Label>Valor unitario</Form.Label>
                <Form.Control
                  type="number"
                  name="valor"
                  placeholder="Ingrese valor"
                  value={valor}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDescription">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  type="text"
                  name="disponible"
                  placeholder="Estado"
                  value={disponible}
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
                  Registrar
                </Button>
              </div>
              <br />
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
