**Take-Home Assignment for Software Development Engineer Positions**

*Introduction:*

As a leading healthcare technology company, we are constantly on the lookout for exceptional talent to join our team. This take-home assignment is designed to assess your technical skills, problem-solving abilities, and innovative thinking. It consists of two main parts: the Core Functionality Tasks and the Bar Raiser Challenges. Please reach out to [tushar.langer@healthcatalyst.com](mailto:tushar.langer@healthcatalyst.com) or [+91 7022209250](tel:+917022209250) for any doubts.

*Core Functionality Tasks:*

1. **Unique Activity Pattern Analyzer** - `findUniqueActivityPatternLength`:
   - Develop a function to analyze a string of user access actions and determine the length of the longest sequence where all actions are unique.
   - The function should operate with a time complexity of O(n).
   - Write unit tests to validate the functionality against various scenarios.
   - Implemente as a single end to end features involving UI and backend interaction

2. **Efficient Pattern Search Mechanism** - `findPatternOccurrences`:
   - Implement a function that counts the occurrences of a pattern within a larger text.
   - Aim for a time complexity of O(n) to ensure suitability for processing large datasets.
   - Include a suite of unit tests for multiple patterns and text inputs.
   - Implemente as a single end to end features involving UI and backend interaction

3. **Upgrading codebase and developing feature for updating profile details**:
   - Suggest profile update and password change features for enhanced security.
   - Develop an upgrade plan for migrating services to their latest versions.


*Bar Raiser Challenges:*

- Introduce a new feature, microservice, or frontend improvement of any framework of your choice.
- Design an end-to-end testing suite to bolster application reliability.

*Expectations:*

- Produce clean, maintainable, and well-documented code.
- Include a README explaining your approach, how to run the code, and execute the tests.
- Use any additional libraries or tools you deem necessary.

*Submission:*

Your submission should include:

- A comprehensive design document covering both the low-level and high-level design challenges.
- A detailed proposal for the innovation challenge, potentially with diagrams and code snippets.
- A README file that articulates your design decisions and thought process.

Please submit your completed assignment within 14 days. Your innovative solutions and problem-solving approach will be crucial in our evaluation.

We are excited to see your work and look forward to the possibility of you joining our dynamic team.


# Healthcare Management Application

Your healthcare management application project is a comprehensive system built using modern technologies and is designed to be robust, scalable, and secure. The choice of technologies and tools, such as Angular for the frontend, Django Rest Framework for the backend, PostgreSQL and MySQL for databases, and Docker for containerization, is well-suited for developing a healthcare application that requires secure, efficient, and easy-to-maintain solutions. 

Here are some insights and advice on best practices for your project:

### 1. Security Practices
Given the sensitive nature of healthcare data, ensuring data protection and compliance with healthcare regulations (like HIPAA in the United States) is crucial. Implementing secure authentication and authorization mechanisms, such as OAuth2 and JWT for token-based authentication, is a good start. Encryption of data at rest and in transit should also be considered essential. Regular security audits and code reviews can help identify and mitigate vulnerabilities.

### 2. Continuous Integration/Continuous Deployment (CI/CD)
Automating the deployment process using CI/CD pipelines can significantly improve the efficiency and reliability of deploying updates to your application. Tools like Jenkins, GitLab CI/CD, or GitHub Actions can automate testing, building, and deploying your application, ensuring that changes are seamlessly integrated and deployed with minimal manual intervention.

### 3. Testing Strategies
Adopt a comprehensive testing strategy that includes unit tests, integration tests, and end-to-end tests. This ensures that individual components work as expected, integrate correctly, and the entire application functions as intended from the user's perspective. For Angular applications, tools like Jasmine and Karma are great for unit and integration testing, while Protractor can be used for end-to-end testing. For Django, the built-in test framework is powerful for creating a wide range of tests.

### 4. Scalability and Performance Optimization
Consider using caching mechanisms and a Content Delivery Network (CDN) to improve the responsiveness of your application. Django offers various caching options that can significantly reduce database query times. For Angular applications, lazy loading modules can improve initial load times by splitting the application into multiple bundles and loading them on demand.

### 5. Database Management
Given that you support both PostgreSQL and MySQL, ensure that your ORM (Object-Relational Mapping) queries are optimized and database schemas are properly indexed to handle large datasets efficiently. Regularly monitor the database performance and consider replication or sharding for scalability if necessary.

### 6. Documentation and Code Quality
Maintain comprehensive documentation for your API endpoints, database schemas, and deployment procedures. This not only helps in onboarding new developers but also serves as a reference for the maintenance team. Adhering to coding standards and using tools like linters and formatters can help maintain code quality.

### 7. Responsive Design
Since the application is web-based and designed to be responsive, continually test and optimize the user interface across various devices and browsers to ensure a consistent and accessible user experience. Angular Material offers a wide range of UI components that adhere to Material Design principles and are designed to be responsive and customizable.

### 8. Use of Docker and Containerization
Your approach to using Docker for both development and production environments is commendable. It ensures consistency across different environments and simplifies the deployment process. Make sure to keep your Docker images lightweight by minimizing the number of layers and removing unnecessary dependencies. Also, consider using Docker Compose's override feature to manage differences between development, staging, and production configurations more effectively.

Lastly, staying up-to-date with the latest versions of the technologies you're using can help leverage new features and improvements while ensuring your application remains secure and efficient.

## **Summary**

This project has API endpoints for login, register, healthcare data built in Angular 8 i.e. single page application with material design principals and Django Rest Framework with PostgreSQL &amp; MySQL support.

This application has validations for login, register as well as search and sort functionality for healthcare data view along with a separate one to one view for each healthcare.

This web application is completely responsive.

## **Technologies used:**

1. Python 3,
2. Angular 8,
3. Django Rest Framework,
4. PostgreSQL
5. MySQL
6. Docker

## **Requirements for running the project in local machine:**

1. Python
2. Docker

## **Running project on local machine:**

1. ### **Running in Development environment**
  1. For running the project: docker-compose up -d –-build
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
  3. User endpoint: localhost:8000/api/v1/healthcare/users
  4. Healthcare endpoint: localhost:8000/api/v1/healthcare/profile
3. Postgres: localhost:5050
  1. Login details | username: [admin@healthcare.com](mailto:admin@healthcare.com) | password: admin
  2. Click on add a new server and fill the following details
    1. General Tab || Name: database
    2. Connection Tab || Host: database | username: app | password: app

## **Routes &amp; Endpoints | Production environment**

1. Angular Frontend: localhost
2. Django Rest Framework: localhost/api
  1. Admin Dashboard: localhost/api/v1/admin
  2. Authentication endpoint: localhost/api/v1/auth-token
  3. User endpoint: localhost/api/v1/healthcare/users
  4. Healthcare endpoint: localhost/api/v1/healthcare/profile
3. Postgres: localhost/pgadmin
  1. Login details | username: [admin@healthcare.com](mailto:admin@healthcare.com) | password: admin
  2. Click on add a new server and fill the following details
    1. General Tab || Name: database
    2. Connection Tab || Host: database | username: app | password: app

## **Dummy Data Ingestion:**

1. Sign up on the app and identify the user id from the api end point api/v1/healthcare/users
2. In the dummy-data.json, ensure the users: [] has the user id in it.
3. In post-data.py script, ensure that the apr\_url matches the healthcare/profile endpoint.
4. Run post-data.py script that is in the post-data-script directory.
5. Refresh the dashboard/login to the dashboard

### **MySQL**

For MySQL immplentation, use mysql branch. All the steps stays the same as above. Only one thing to keep in mind is the route for it which will be localhost:8183 and Login details | username: [root](mailto:admin@healthcare.com) | password: password
