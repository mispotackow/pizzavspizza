from rest_framework import serializers
from .models import Pizzeria


class PizzeriaListSerializer(serializers.ModelSerializer):
    """
    PizzeriaListSerializer для визуализации всех пиццерий в нашей базе данных в виде списка.
    Представление списка обычно содержит ограниченное количество деталей, самые важные,
    такие как имя, город и некоторые другие важные атрибуты. Он также включает поле id.
    """
    class Meta:
        model = Pizzeria
        fields = [
            'id',
            'pizzeria_name',
            'city',
            'zip_code',
        ]


class PizzeriaDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizzeria
        fields = [
            'id',
            'pizzeria_name',
            'street',
            'city',
            'state',
            'zip_code',
            'website',
            'phone_number',
            'description',
            'logo_image',
            'email',
            'active'
        ]










# class PizzeriaListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Pizzeria
#         fields = [
#             'id',
#             'logo_image',
#             'pizzeria_name',
#             'city',
#             'zip_code',
#             'absolute_url'
#         ]
