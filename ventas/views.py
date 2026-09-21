from rest_framework import viewsets
from .models import Venta,DetalleVenta,pago
from .serializers import VentaSerializer,DetalleVentaSerializer,PagoSerializer


class VentasViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer


class DetalleVentaViewSet(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer


class PagoViewSet(viewsets.ModelViewSet):
    queryset = pago.objects.all()
    serializer_class = PagoSerializer