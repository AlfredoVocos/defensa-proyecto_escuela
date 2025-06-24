import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { URL_DOCENTES } from "../../Constants/endpoints";
import { useNavigate } from "react-router-dom";

import "../../CSS/DocenteTable.css";

const DocenteTable = () => {
  const navigate = useNavigate();
  const initialState = {
    nombre: "",
    dni: "",
    email: "",
    materia: "",
  };
  const [docente, setDocente] = useState(initialState);

  {
    //---------------------------------------------------------
  }
  const handleChange = (e) => {
    setDocente({ ...docente, [e.target.name]: e.target.value });
  };
  {
    //---------------------------------------------------------
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL_DOCENTES, docente);
      setDocente(response.data);

      setDocente(initialState); // aqui limpiamos los datos del formulario, para ello deb
      if (response) {
        navigate("/HomeBoard"); // Redirige al usuario a la página de inicio después de crear el cliente
        console.log("Docente creado exitosamente:", response.data);
      }
    } catch (error) {
      console.error("Error al crear el docente:", error);
    }
  };

  {
    //---------------------------------------------------------
  }

  return (
    <div className="containerDocente">
      <h2 className="titulo">Cargar datos del Docente</h2>

      <div className="contenedorFlex">
        <img
          src="/assets/carga_docentes.png"
          alt="Docente"
          className="ImgcargaDocente"
        />
        <div className="contenedorFormDocente">
          <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
              <div className="contenedorLabel">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Apellido y Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ingresa tu Apellido y Nombre"
                    value={docente.nombre}
                    name="nombre"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextareal"
                >
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ingresa tu dni"
                    name="dni"
                    value={docente.dni}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ingresa tu Email"
                    name="email"
                    value={docente.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Materia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ingresa la materia que dicta"
                    name="materia"
                    value={docente.materia}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
                <div className="contenedorBoton">
                  <Button variant="primary" type="submit">
                    Guardar
                  </Button>
                </div>
            </Form>
            <br />
          </Container>
        </div>
        
      </div>
    </div>
  );
};
export default DocenteTable;
// Este componente es un formulario para crear un nuevo docente.
