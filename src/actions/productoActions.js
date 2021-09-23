import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            // insertar en la API
            await clienteAxios.post('/producto', producto);

            // Si todo sale bien, actualizar el state
            dispatch( agregarProductoExito(producto));

            // Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )

        } catch (error) {
            console.log(error);
            // Si hay un error cambiar el state
            dispatch( agregarProductoError(true));


            Swal.fire(
                'Error',
                'Intenta de nuevo, si el error persiste consulte al administrador',
                'error'
            )
        }

    }
}

const agregarProducto = ()=> ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


// Funcion que descarga los productos de la base de datos
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch(descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargarProductosExitosa( respuesta.data ));
        } catch (error) {
            dispatch( descargarProductosExitosa() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = productos =>( {
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})


