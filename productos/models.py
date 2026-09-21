from django.db import models
import uuid

# Create your models here.
class ModeloBase(models.Model):
    id = models.UUIDField(primary_key= True, default= uuid.uuid4, editable=False)
    is_deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Categoria(ModeloBase):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    activa = models.BooleanField(default=True)

class Marca(ModeloBase):
    nombre = models.CharField(max_length=100)
    pais = models.CharField(max_length=50)

class Producto(ModeloBase):
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock =models.IntegerField(default=0)
    peso = models.FloatField(default=0.0)
    categoria =models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
        related_name='productos'
    )
    marca = models.ForeignKey(
        Marca,
        on_delete= models.CASCADE,
        related_name='productos'
    )