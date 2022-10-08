"""patients URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from App import views


urlpatterns = [
    #Native path to access django admin
    path('admin/', admin.site.urls),

    # Path to access the frontend page
    path('', views.frontend, name="frontend"),

    #Path to login/logout
    path('login/', include('django.contrib.auth.urls')),

#---------------------- BACKEND SECTION ----------------------|
    # Path to Access the backend page
    path('backend/',     views.backend,         name="backend"),
    # url on browser     #function in view.py   # url inside the template.html

    #Path to Add patient
    path('add_patient', views.add_patient, name="add_patient"),

    #Path to Access the patient individually
    path('patient/<str:patient_id>', views.patient, name="patient"),

     #Path to Edit patient
    path('edit_patient', views.edit_patient, name="edit_patient"),

    #Path to Delete the patient
    path('delete_patient/<str:patient_id>', views.delete_patient, name="delete_patient"),
]
