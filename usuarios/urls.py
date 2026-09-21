from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, EmpleadoViewSet, DireccionViewSet

router = DefaultRouter()
router.register('clientes', ClienteViewSet)
router.register('empleados', EmpleadoViewSet)
router.register('direcciones', DireccionViewSet)

urlpatterns = router.urls

##http://127.0.0.1:8000/api/usuarios/clientes/
##http://127.0.0.1:8000/api/usuarios/empleados/
##http://127.0.0.1:8000/api/usuarios/direcciones/