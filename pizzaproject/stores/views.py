from django.shortcuts import render
from rest_framework import generics
from .serializers import PizzeriaListSerializer, PizzeriaDetailSerializer
from .models import Pizzeria
# Create your views here.


class PizzeriaListAPIView(generics.ListAPIView):
    """
    ListAPIView
    Используется для конечных точек, доступных только для чтения, для представления коллекции экземпляров модели.
    Предоставляет «get» обработчик метода.
    Расширяется: GenericAPIView , ListModelMixin
    """
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaListSerializer


class PizzeriaRetrieveAPIView(generics.RetrieveAPIView):
    """
    RetrieveAPIView
    Используется для конечных точек, доступных только для чтения, для представления одного экземпляра модели.
    Предоставляет «get» обработчик метода.
    Расширяется: GenericAPIView, RetrieveModelMixin
    """
    # lookup_field: Поле модели, которое следует использовать для поиска объектов в отдельных экземплярах модели.
    lookup_field = 'id'
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaCreateAPIView(generics.CreateAPIView):
    """
    Используется для конечных точек только для создания.
    Предоставляет «post» обработчик метода.
    Расширяется: GenericAPIView , CreateModelMixin
    """
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    """
    Используется для чтения или обновления конечных точек для представления одного экземпляра модели.
    Обеспечивает «get», «put» и «patch» обработчики методов.
    Расширяется: GenericAPIView , RetrieveModelMixin , UpdateModelMixin
    """

    # UpdateAPIView не совсем удобен для пользователя. Если мы подумаем о процессе обновления записи в базе данных,
    # есть две операции: во-первых, вам нужно получить объект по идентификатору, а затем обновить информацию.
    # Generic UpdateAPIView выполняет вторую операцию; он предоставляет форму для обновления объекта.
    # Было бы полезно видеть обновляемую информацию, а не только пустые поля.
    # Вот почему мы выбрали RetrieveUpdateAPIView. Основное отличие заключается в самом названии.
    # RetrieveUpdateAPIView сначала извлекает объект; вы можете изучить все детали, а затем обновить их.

    # lookup_field, чтобы найти единственный объект в базе данных, прежде чем вносить какие-либо изменения
    lookup_field = 'id'
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaDestroyAPIView(generics.DestroyAPIView):
    """
    Предоставляет .destroy(request, *args, **kwargs) метод, реализующий удаление существующего экземпляра модели.
    Если объект удален, возвращается 204 No Contentответ, в противном случае возвращается 404 Not Found.
    Не нуждается в сериализаторе.
    """
    lookup_field = 'id'
    queryset = Pizzeria.objects.all()







# документация: https://www.django-rest-framework.org/api-guide/generic-views/