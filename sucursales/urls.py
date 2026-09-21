from rest_framework.routers import DefaultRouter
from .views import SucursalViewSet,MovimientoViewSet,InventarioViewSet

router = DefaultRouter()
router.register('sucursales', SucursalViewSet)
router.register('movimientos', MovimientoViewSet)
router.register('inventarios', InventarioViewSet)

urlpatterns = router.urls

##http://127.0.0.1:8000/api/sucursales/sucursales/
##http://127.0.0.1:8000/api/sucursales/movimientos/
##http://127.0.0.1:8000/api/sucursales/inventarios/