import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../CSS/Formulario.css';
import Listado from './Listado';

const Formulario = () => {

  const initialState = {
    nombre: '',
    apellido: '',
    edad: '',
  }

  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });

  }

  const [usuarios, setUsuarios] = useState([]);

 const handleSubmit = (e) => {
  e.preventDefault();
  setUsuarios([...usuarios, data]);
  setData(initialState);
}

useEffect(() => {
 console.log('Usuarios actualizados:', usuarios);
}, [usuarios]);



  return (
    <>
<h2>Datos : {data.nombre} {data.apellido} {data.edad}</h2>
    <Listado usuarios={usuarios} />

    <div className='contenedorGeneral'>
    <Form className='contenedorForm' onSubmit={handleSubmit} >
      <Form.Group className=" contenedorLabel1  mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tunombre" name='nombre' onChange={handleChange} value={data.nombre} />
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu apellido" name='apellido' onChange={handleChange} value={data.apellido} />
      </Form.Group>

      <Form.Group className=" contenedorLabel1  mb-3" >
        <Form.Label>Ingresa tu edad</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu edad" name='edad' onChange={handleChange} value={data.edad} />
      </Form.Group>
     <div className="contendorBoton">
      <Button className='botonForm' variant="primary" type='submit' >
        Guardar
      </Button>

     </div>
    </Form>


    </div>
    

    </>
  )
}

export default Formulario