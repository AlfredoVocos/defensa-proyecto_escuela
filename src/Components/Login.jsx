import { useState, useEffect } from "react";
import axios from "axios";
import { URL_USUARIOS } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";
import { HOMEBOARD } from "../Routers/router";
import "../CSS/Login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);

  const userNavigate = useNavigate();


                        // funcion para realizar la peticion 

  const getUsuarios = async () => {
    try {
      const response = await axios.get(URL_USUARIOS);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);


                // funcion que maneja el envio de datos

  const manejarEnvio = (e) => {
    e.preventDefault();
    const usuarioEncontrado = datos.find(
      (user) => user.usuario === usuario && user.password === password
    );
    if (usuarioEncontrado) {
      alert("Inicio de sesión exitoso");
      userNavigate(HOMEBOARD);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
    // Aqui podrias comparar con los datos obtenidos en getusuarios()
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={manejarEnvio}>
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button> 
        {/*para que el boton funcione debe estar dentro de la etiqueta formulario*/}
      </form>
    </div>
  );
}
export default Login;