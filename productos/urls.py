from rest_framework.routers import DefaultRouter
from .views import CategoriaViewSet,MarcaViewSet,ProductoViewSet

router = DefaultRouter()
router.register('categorias', CategoriaViewSet)
router.register('marcas', MarcaViewSet)
router.register('productos', ProductoViewSet)

urlpatterns = router.urls