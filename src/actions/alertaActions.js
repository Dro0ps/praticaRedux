import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// Muestra una alerta
export function mostrarAlerta(alerta) {
    return (distpach) => {
        distpach(crearAlerta(alerta))
    }
}
crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})