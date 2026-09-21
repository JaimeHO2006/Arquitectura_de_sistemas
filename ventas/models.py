from django.db import models
from productos.models import ModeloBase

# Create your models here.
class Venta(ModeloBase):
    fecha = models.DateField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    cliente = models.ForeignKey(
        'usuarios.Cliente',
        on_delete= models.CASCADE,
        related_name='ventas'
    )

class DetalleVenta(ModeloBase):
    cantidad = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    venta = models.ForeignKey(
        Venta,
        on_delete=models.CASCADE,
        related_name='detalles'
    )
    producto = models.ForeignKey(
        'productos.Producto',
        on_delete=models.CASCADE,
        related_name='detalles_venta'
    )

class pago(ModeloBase):
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    metodo = models.CharField(max_length=50)
    venta = models.ForeignKey(
        Venta,
        on_delete=models.CASCADE,
        related_name='pagos'
    )