## Información
**Nombre:** Jaime Alejandro Hernandez Orozco  
**Carnet:** 202408062  
**Universidad:** Universidad Mesoamericana  
**Curso:** Arquitectura de sistemas  
**Profesor:** Jose Pablo Sanchez Estrada  

## Descripción
Este repositorio contiene las tareas, prácticas y proyectos realizados durante el curso de Arquitectura de sistemas.

La actividad HW-03 consiste en el desarrollo de una API utilizando Django y Django REST Framework, organizada en cinco módulos principales.

## Tecnologías utilizadas

- Python 3.14
- Django 6.1.1
- Django REST Framework 3.18.1
- SQLite

## Estructura
El proyecto cuenta con cinco aplicaciones:

- `productos`
- `proveedores`
- `sucursales`
- `usuarios`
- `ventas`

Cada aplicación contiene tres modelos.

## Modelos

### Productos
- Categoria
- Marca
- Producto

### Proveedores
- Proveedor
- Compra
- DetalleCompra

### Sucursales
- Sucursal
- Inventario
- Movimiento

### Usuarios
- Cliente
- Empleado
- Direccion

### Ventas
- Venta
- DetalleVenta
- Pago

Los modelos utilizan UUID como identificador, eliminación lógica mediante `is_deleted`, fecha de creación y fecha de modificación.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/JaimeHO2006/Arquitectura_de_sistemas.git
cd Arquitectura_de_sistemas
```
### 2. Entrar a la rama hw-03
```bash
git switch hw-03
```
### 3. Crear el entorno virtual
```bash
py -m venv myvenv
```
### 4. Activar el entorno virtual
```bash
.\myvenv\Scripts\Activate.ps1
```

### 5. Instalar dependencias
```bash
python -m pip install -r requirements.txt
```

### 6. Realizar migraciones
```bash
python manage.py migrate
## Comprobar que se realizaron correctamente
python manage.py showmigrations
```
### 7. Correr el servidor
```bash
python manage.py runserver
```
El proyecto esta disponible en
*http://127.0.0.1:8000/* 
solo hay que respetar la estructura 
*http://127.0.0.1:8000/api/aplicacion/modulo/*

### Ejemplo
*http://127.0.0.1:8000/api/productos/categorias/*
