from rest_framework.routers import DefaultRouter
from .views import ProveedorViewSet,CompraViewSet,DetalleCompraViewSet

router = DefaultRouter()
router.register('proveedores', ProveedorViewSet)
router.register('compras', CompraViewSet)
router.register('detalles-compras', DetalleCompraViewSet)

urlpatterns = router.urls