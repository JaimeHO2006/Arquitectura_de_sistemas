from django.db import models
from productos.models import ModeloBase

# Create your models here.
class Proveedor(ModeloBase):
    nombre = models.CharField(max_length=100)
    telefono = models.CharField(max_length=30)
    correo = models.EmailField()

class Compra(ModeloBase):
    fecha = models.DateField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    proveedor = models.ForeignKey(
        Proveedor,
        on_delete=models.CASCADE,
        related_name='compras'
    )

class DetalleCompra(ModeloBase):
    cantidad = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    compra = models.ForeignKey(
        Compra,
        on_delete=models.CASCADE,
        related_name='detalles'
    )
    producto = models.ForeignKey(
        'productos.Producto',
        on_delete=models.CASCADE,
        related_name='detalles_compra'
    )