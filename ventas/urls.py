from rest_framework.routers import DefaultRouter
from .views import VentasViewSet,DetalleVentaViewSet,PagoViewSet

router = DefaultRouter()
router.register('ventas', VentasViewSet)
router.register('detalles-ventas', DetalleVentaViewSet)
router.register('pagos', PagoViewSet)

urlpatterns = router.urls

##http://127.0.0.1:8000/api/ventas/ventas/
##http://127.0.0.1:8000/api/ventas/detalles-ventas/
##http://127.0.0.1:8000/api/ventas/pagos/