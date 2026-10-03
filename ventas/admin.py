from django.contrib import admin
from .models import Venta, DetalleVenta, pago

admin.site.register(Venta)
admin.site.register(DetalleVenta)
admin.site.register(pago)