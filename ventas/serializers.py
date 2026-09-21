from rest_framework import serializers
from .models import Venta,DetalleVenta,pago


class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = '__all__'


class DetalleVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleVenta
        fields = '__all__'


class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = pago
        fields = '__all__'