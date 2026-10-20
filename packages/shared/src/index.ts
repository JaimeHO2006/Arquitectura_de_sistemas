
export interface EstadoAplicacion {
  aplicacion: string;
  estado: string;
  mensaje: string;
}

export function crearEstadoAplicacion(
  aplicacion: string
): EstadoAplicacion {

  return {
    aplicacion: aplicacion,
    estado: 'Funcionando',
    mensaje: 'Generado desde la libreria compartida @arqui/shared'
  };

}
