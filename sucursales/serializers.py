from rest_framework import serializers
from .models import Sucursal,Inventario,Movimiento


class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = '__all__'


class InventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario
        fields = '__all__'


class MovimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimiento
        fields = '__all__'