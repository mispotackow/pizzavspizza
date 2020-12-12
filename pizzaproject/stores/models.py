from django.db import models
from django.core.validators import RegexValidator

#   Модель
# • Название пиццерии: Название не должно быть длиннее 200 символов.
#   Поле нельзя оставлять пустым. Имя не обязательно должно быть уникальным.
# • Улица: до 400 символов или может быть оставлено пустым.
# • Город: до 200 символов, не может быть оставлено пустым.
# • Штат. А пока давайте сосредоточимся только на пиццериях США и добавим список всех штатов.
# • Почтовый индекс: он должен состоять из пяти цифр, и мы можем оставить его пустым со значением по умолчанию 0.
# • Веб-сайт: это должен быть URL-адрес или его можно оставить пустым.
# • Номер телефона: формат должен состоять из десяти цифр, без скобок и тире.
# • Описание пиццерии: это должен быть обычный текст или оставить поле пустым.
# • Изображение или логотип пиццерии: прикрепленный файл в формате png или jpg, хранящийся в
#   специальной папке pizzeriaImages, который можно оставить пустым. Мы поместим туда изображение по умолчанию.
# • Электронная почта: это поле можно оставить пустым или содержать до 200 символов.
# • Активность: логического значения для последующей фильтрации по текущим записям.
# •  Если пиццерия прекратит работу, мы отметим ее как неактивную.


class Pizzeria(models.Model):
    pizzeria_name = models.CharField(max_length=200, blank=True)
    street = models.CharField(max_length=400, blank=True)
    city = models.CharField(max_length=400, blank=True)
    state = models.CharField(max_length=2, null=True, blank=True)
    zip_code = models.IntegerField(blank=True, default=0)
    website = models.URLField(max_length=420, blank=True)
    phone_number = models.CharField(validators=[RegexValidator(regex=r'^\d{9,10}$')], max_length=10, blank=True)
    description = models.TextField(blank=True)
    logo_image = models.ImageField(upload_to='pizzariaImages', blank=True, default='pizzariaImages/pizzalogo.png')
    email = models.EmailField(max_length=245, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return "{}, {}".format(self.pizzeria_name, self.city)


class Image(models.Model):
    pizzeria = models.ForeignKey(Pizzeria, on_delete=models.CASCADE, related_name='pizzeria_images',
                                 blank=True, null=True)
    image = models.ImageField(upload_to='photos', blank=True)
    image_title = models.CharField(max_length=120, blank=True)
    uploded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-uploded_at']
