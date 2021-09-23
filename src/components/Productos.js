import React, { useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions'


const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // consultar la api
        const cargarProductos = () => dispatch( obtenerProductosAction());
        cargarProductos();
        
    }, [])


    return ( 
    <>
        <h2 className="text-center my-5">Listado de Productos</h2>

        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>

        </table>

    </>
     );
}
 
export default Productos;