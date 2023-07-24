## Frontend Setup:

1. **Install Node and npm packages**:

   - Node: Install Node.js version 18 using the package manager.
     ```
     sudo apt-get install nodejs:18/common
     ```

   - npm packages:
     - React Bootstrap and Bootstrap:
       ```
       npm install react-bootstrap bootstrap
       ```

     - React Router DOM:
       ```
       npm install react-router-dom
       ```

     - Axios:
       ```
       npm install axios
       ```

     - Redux, React Redux, Redux Thunk, and Redux DevTools Extension:
       ```
       npm install redux react-redux redux-thunk redux-devtools-extension
       ```

   Consider using Yarn instead of npm as a package manager for better performance and consistency. To install Yarn, run `npm install -g yarn`.

2. **Create a new React app**:

   After installing Node, you can create a new React app using Create React App.
   ```
   npx create-react-app MY_APP_NAME
   ```

   Explore the `create-react-app` documentation to learn more about available options and customizations.

3. **Useful Links**:
   - [React Bootstrap Reference](https://react-bootstrap.github.io/docs): Visit this documentation for detailed information on using React Bootstrap components and features.

   - [Icons](https://cdnjs.com/): Find a collection of icons hosted on the CDN for use in your React app.

## Backend Setup:

1. **Install Django and required packages**:

   - Start a new Django project:
     ```
     django-admin startproject MY_PROJECT_NAME
     ```

   - Create a new Django app within the project:
     ```
     python manage.py startapp APP_NAME
     ```

   - Run the Django development server:
     ```
     python manage.py runserver
     ```

   - Install Django REST framework:
     ```
     pip install djangorestframework
     ```

   It's good practice to set up a virtual environment for your Django projects using `virtualenv` or `venv` to manage dependencies and keep your project isolated from the system-wide Python environment.

2. **Install `django-cors-headers`**:

   Django projects often need Cross-Origin Resource Sharing (CORS) support, especially when interacting with frontend applications from different domains. `django-cors-headers` is a useful package for handling CORS headers in Django applications.
   ```
   pip install django-cors-headers
   ```

   Be cautious with CORS settings in production environments to prevent potential security vulnerabilities. Only allow specific domains that require access to your API.

3. **Update `package.json` for API path**:

   Add the following line to your `package.json` file to set up a proxy for API requests, allowing you to make requests to your backend directly with `/` paths.
   ```
   "proxy": "http://127.0.0.1:8000",
   ```

   Remember to update the proxy URL in production environments to reflect the actual backend server's address.

4. **Useful Link**:
   - [drawsql](https://drawsql.app/): Utilize this tool to create clear and organized database schemas for your Django application.

## Django Model Setup:

1. **Create superuser for accessing Django admin**:

   The superuser account allows you to access the Django admin interface for managing your application's data. Run the following command and follow the prompts to create a superuser:
   ```
   python manage.py createsuperuser
   ```

2. **Apply initial migrations for models**:

   Migrations are Django's way of managing changes to your database schema. To apply the initial migrations for the models, use the following command:
   ```
   python manage.py migrate
   ```

   Always create an initial migration and apply it before making any changes to your models to maintain database consistency.

3. **For each new model created**:

   When you create a new model in Django, you need to follow these steps:

   - First, create migrations for the model by running:
     ```
     python manage.py makemigrations
     ```

   - Then, apply the changes to the database using:
     ```
     python manage.py migrate
     ```

   Take advantage of Django's built-in admin interface by registering your models in the `admin.py` file within your app. This will allow you to manage your model data directly from the Django admin interface.

## Django Authentication:

Django REST framework provides various authentication options. One commonly used authentication method is JSON Web Token (JWT) authentication. For detailed instructions on implementing authentication in Django, check the [djangorestframework documentation](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html).

## Additional Tips:

- **Branch naming convention**:
   - Use a consistent and descriptive branch naming convention. For example, you can use `projectname-activechapterNUMBER` for branch names, such as `proshop-chapter22`.

- **Consider using React Hooks**:
   - When working with React, consider using React Hooks instead of traditional class components to write more concise and reusable code.

- **Practice Good API Design**:
   - When building APIs, follow RESTful design principles and use descriptive names for endpoints and resources to make your API intuitive and easy to use.

- **Use Redux DevTools Extension**:
   - The Redux DevTools Extension allows you to inspect, monitor, and time-travel debug your Redux state changes. It's a powerful tool for Redux development.

- **Keep Your Dependencies Updated**:
   - Regularly update your project's dependencies to ensure you have the latest bug fixes and security patches.

- **Document Your Code**:
   - Write clear and concise comments and documentation for your code, making it easier for others (and yourself) to understand the codebase.




token snippetes
https://django-rest-framework-simplejwt.readthedocs.io/en/latest/customizing_token_claims.html



its importantint to mention that in django rest framework are a decoreator called permission clases
```py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
```
this will set which method need or not to have validation