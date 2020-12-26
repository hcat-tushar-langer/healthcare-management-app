# Crop Management Application

## **Summary**

This project has API endpoints for login, register, crop data built in Angular 8 i.e. single page application with material design principals and Django Rest Framework with PostgreSQL &amp; MySQL support.

This application has validations for login, register as well as search and sort functionality for crop data view along with a separate one to one view for each crop.

This web application is completely responsive.

## **Technologies used:**

1. Python 3,
2. Angular 8,
3. Django Rest Framework,
4. PostgreSQL
5. MySQL
6. Docker

## **Requirements for running the project in local machine:**

1. Docker

## **Running project on local machine:**

1. ### **Running in Development environment**
  1. For running the project: docker-compose up -d –build
  2. For checking logs &amp; troubleshooting: docker-compose logs -f
  3. For closing project: docker-compose down -v
  4. For running commands in the local containers:
    1. docker-compose exec [container name] [command]
    2. docker-compose exec backend python manage.py createsuperuser
    3. docker-compose exec backend python manage.py makemigrations
    4. docker-compose exec backend python manage.py migrate
2. ### **Running in Production environment:**
  1. For running the project: docker-compose -f docker-compose.prod.yml up -d --build
  2. For checking logs &amp; troubleshooting: docker-compose -f docker-compose.prod.yml logs -f
  3. For closing project: docker-compose -f docker-compose.prod.yml down -v
  4. For running commands in the local containers:
    1. docker-compose -f docker-compose exec [container name] [command]
    2. docker-compose -f docker-compose exec backend python manage.py createsuperuser
    3. docker-compose -f docker-compose exec backend python manage.py makemigrations
    4. docker-compose -f docker-compose exec exec backend python manage.py migrate

## **Routes &amp; Endpoints | Development environment**

1. Angular Frontend: localhost:4201
2. Django Rest Framework Backend: localhost:8000
  1. Admin Dashboard: localhost:8000/api/v1/admin
  2. Authentication endpoint: localhost:8000/api/v1/auth-token
  3. User endpoint: localhost:8000/api/v1/crop/users
  4. Crop endpoint: localhost:8000/api/v1/crop/profile
3. Postgres: localhost:5050
  1. Login details | username: [admin@bharatagri.com](mailto:admin@bharatagri.com) | password: admin
  2. Click on add a new server and fill the following details
    1. General Tab || Name: database
    2. Connection Tab || Host: database | username: app | password: app

## **Routes &amp; Endpoints | Production environment**

1. Angular Frontend: localhost
2. Django Rest Framework: localhost/api
  1. Admin Dashboard: localhost/api/v1/admin
  2. Authentication endpoint: localhost/api/v1/auth-token
  3. User endpoint: localhost/api/v1/crop/users
  4. Crop endpoint: localhost/api/v1/crop/profile
3. Postgres: localhost/pgadmin
  1. Login details | username: [admin@bharatagri.com](mailto:admin@bharatagri.com) | password: admin
  2. Click on add a new server and fill the following details
    1. General Tab || Name: database
    2. Connection Tab || Host: database | username: app | password: app

## **Dummy Data Ingestion:**

1. Sign up on the app and identify the user id from the api end point api/v1/crop/users
2. In the dummy-data.json, ensure the users: [] has the user id in it.
3. In post-data.py script, ensure that the apr\_url matches the crop/profile endpoint.
4. Run post-data.py script that is in the post-data-script directory.
5. Refresh the dashboard/login to the dashboard

### **MySQL**

For MySQL immplentation, use mysql branch. All the steps stays the same as above. Only one thing to keep in mind is the route for it which will be localhost:8183 and Login details | username: [root](mailto:admin@bharatagri.com) | password: password

## Application Sceenshots
Check screen shots folder
