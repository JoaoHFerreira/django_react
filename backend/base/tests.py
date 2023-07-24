from django.test import TestCase
from django.urls import reverse
from rest_framework import status

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from base.models import User

class JWTAuthTestCase(APITestCase):
    def setUp(self):
        self.username = 'testuser'
        self.password = 'testpass'
        self.user = User.objects.create_user(username=self.username, password=self.password)

    def test_user_login(self):
        url = reverse('token_obtain_pair')
        data = {'username': self.username, 'password': self.password}
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
