from django.contrib import admin
from .models import Sucursal, Inventario, Movimiento

admin.site.register(Sucursal)
admin.site.register(Inventario)
admin.site.register(Movimiento)