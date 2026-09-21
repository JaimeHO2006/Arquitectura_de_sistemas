from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/productos/', include('productos.urls')),
    path('api/proveedores/', include('proveedores.urls')),

    path('api/sucursales/', include('sucursales.urls')),
    path('api/usuarios/', include('usuarios.urls')),
    path('api/ventas/', include('ventas.urls')),
]