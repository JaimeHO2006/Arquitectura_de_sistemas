from django.db import models
from productos.models import ModeloBase

# Create your models here.
class Cliente(ModeloBase):
    nombre = models.CharField(max_length=100) 
    correo = models.EmailField()
    edad = models.IntegerField()

class Empleado(ModeloBase):
    nombre = models.CharField(max_length=100)
    puesto = models.CharField(max_length=100)
    salario = models.DecimalField(max_digits=10, decimal_places=2)

class Direccion(ModeloBase):
    direccion = models.CharField(max_length=200) 
    ciudad = models.CharField(max_length=100)
    cliente = models.ForeignKey(
        Cliente,
        on_delete= models.CASCADE,
        related_name='direcciones',
    )