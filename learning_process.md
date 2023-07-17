# Installing

* Node: `sudo apt-get install nodejs:18/common``;
* npm packages: 
   * npm install react-bootstrap bootstrap
   * npm install react-bootstrap
   * npm install react-router-dom
   * npm install axios
   * npm install redux react-redux redux-thunk redux-devtools-extension

# Frontend Project Setup
After installed run
```
npx create-react-app MY_APP_NAME
```

# Useful Links
* [React Boostrap Reference](https://react-bootstrap.github.io/docs)
* [Icons](https://cdnjs.com/)


# Backend Project Setup
* django-admin startproject MY_PROJECT_NAME
* python manage.py startapp APP_NAME
* python manage.py runserver
* pip install djangorestframework

Install accordinlgh with recomendations
https://pypi.org/project/django-cors-headers/



Add
`"proxy": "http://127.0.0.1:8000",`` on package.json to be able to add API path
direct with `/``




useful links
https://drawsql.app/ to create the schemas



create super user for acces django
$ python manage.py createsuperuser


used to creat all modesl relations
$ python manage.py migrate  


apply all changes
$ python manage.py makemigrations




created models need to follow
admin.site.register(Product)

inside admin.py in django from your specific aplplacitatoin





for each new model created the command
first run $ python manage.py makemigrations
to create all scripts and after

first run $ python manage.py migrate




check https://react-bootstrap.github.io/ for documentation and available components