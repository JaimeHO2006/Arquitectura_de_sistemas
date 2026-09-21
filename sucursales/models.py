from django.db import models
from productos.models import ModeloBase

# Create your models here.
class Sucursal(ModeloBase):
    nombre = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    activa = models.BooleanField(default=True)

class Inventario(ModeloBase):
    cantidad = models.IntegerField(default=0)
    producto = models.ForeignKey(
        'productos.Producto',
        on_delete=models.CASCADE,
        related_name='inventarios'
    )
    sucursal = models.ForeignKey(
        Sucursal,
        on_delete=models.CASCADE,
        related_name='inventarios'
    )

class Movimiento(ModeloBase):
    cantidad = models.IntegerField()
    tipo = models.CharField(max_length=20)
    inventario = models.ForeignKey(
        Inventario,
        on_delete=models.CASCADE,
        related_name='movimientos'
    )