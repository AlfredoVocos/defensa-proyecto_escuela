import { Table, Button } from "react-bootstrap";
import "../CSS/Main.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_DOCENTES } from "../Constants/endpoints";
import { Link } from "react-router-dom";

const Main = () => {
  const [datos, setDatos] = useState([]);

  //---------------------------------------------------------

  const getDocentes = async () => {
    try {
      const response = await axios.get(URL_DOCENTES);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los docentes: ", error);
    }
  };

  useEffect(() => {
    getDocentes();
  }, []);

  //---------------------------------------------------------

  const Borrar = async (id) => {
    try {
      //if (confirm("¿Estás seguro de que querés eliminar este docentes?")) {
      await axios.delete(`${URL_DOCENTES}/${id}`);
      getDocentes(); // Actualiza la lista de docentes después de eliminar
    } catch (error) {
      //}
      console.error("Error al eliminar el docentes:", error);
    }
  };

  //---------------------------------------------------------

  return (
    <>
      <h1 className="plantillaDocentes"> Plantilla de Docentes</h1>
      {/* <Link to='/view' className="btn btn-primary">Ver Docentes</Link> */}
      <div className="containerMain">
        

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Apellido y Nombre</th>
              <th>DNI</th>
              <th>Email</th>
              <th>Materia</th>
            </tr>
          </thead>

          {datos.map((docente) => (
            <tbody key={docente.id}>
              <tr>
                <td>{docente.nombre}</td>
                <td>{docente.dni}</td>
                <td>{docente.email}</td>
                <td>{docente.materia}</td>

                <td>
                  <button className="btn btn-primary"> Editar </button>
                  <button className="btn btn-danger"> Ver </button>
                  <button onClick={() => {Borrar(docente.id) }} className="btn btn-success" > Eliminar </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <Link to="/crearDocente" className="btn btn-success"> Crear Docente </Link>
      </div>
    </>
  );
};

export default Main;
