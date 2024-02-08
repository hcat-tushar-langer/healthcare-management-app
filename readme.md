**Take-Home Assignment for Software Development Engineer Positions**

*Introduction:*

As a leading healthcare technology company, we are constantly on the lookout for exceptional talent to join our team. This take-home assignment is designed to assess your technical skills, problem-solving abilities, and innovative thinking. It consists of two main parts: the Core Functionality Tasks and the Bar Raiser Challenges. Please find the assignment at: [github](https://github.com/hcat-tushar-langer/healthcare-management-app/) and please reach out to [tushar.langer@healthcatalyst.com](mailto:tushar.langer@healthcatalyst.com) or [+91 7022209250](tel:+917022209250) for any doubts.

*<u>Core Functionality Tasks<u>* - *Build the application features of your choice using any framework / language or technology in the given application ecosystem from the following:*

1. **Implement profile update and password change features for enhanced security.**

2. **Unique Activity Pattern Analyzer** - `findUniqueActivityPatternLength`:
   - Build the application features of your choice using any framework / language or technology using this algorithm
   - Develop a function to analyze a string of user access actions and determine the length of the longest sequence where all actions are unique.
   - The function should operate with a time complexity of O(n).
   - Write unit tests to validate the functionality against various scenarios.
   - Implement as a single end to end features involving UI and backend interaction

3. **Efficient Pattern Search Mechanism** - `findPatternOccurrences`:
   - Build the application features of your choice using any framework / language or technology using this algorithm
   - Implement a function that counts the occurrences of a pattern within a larger text.
   - Aim for a time complexity of O(n) to ensure suitability for processing large datasets.
   - Include a suite of unit tests for multiple patterns and text inputs.
   - Implemented as a features involving UI.

4. **Ensure that the app works in both development and production environments**

5. **Help Section**
   - Thoroughly go through the readme file to understand the project.
   - Set up the codebase on your local machine. You need Docker and Python for that.
   - Read the documentation to set up the local environment and understand the technicalities of the project.
   - Implement any service (including UI) of your choice in the same application ecosystem and codebase. For example, React, NodeJS, Springboot, mongodb etc.
   - If you need help or have any doubts, reach out to me at my email and set up a 15 min call to keep moving forward. I am here to help.
   - Implement features to complete edit profile details and profile password in the application.
   - Hint: `findUniqueActivityPatternLength` - This functionality could utilize an algorithm to monitor the mouse movements of our users. Specifically, we can record four types of mouse actions: a left click represented by the string 'A', a right click by 'B', scrolling up by 'C', and scrolling down by 'D'. By tracking and storing these events, we can then display the longest distinct pattern of activity for each user within the user interface. You can extend this funcanality to make it more robust or use any other ideas for user activity tracking.
   - Use your understanding to build a feature using `findUniqueActivityPatternLength` algorithm.
   - Use similar strategy for building features from algorithms in *Bar Raiser Challanges*

*<u>Bar Raiser Challenges</u>:*

- Introduce a new feature, microservice, or frontend improvement of any framework of your choice.
- Develop an upgrade plan for migrating services to their latest versions.
- Design an end-to-end testing suite to bolster application reliability.
- Performance Optimization: Focus on enhancing system efficiency by streamlining code, optimizing databases, and implementing caching. Aim to boost speed and scalability while reducing load times.

*Expectations:*

- Produce clean, maintainable, and well-documented code.
- Include a README explaining your approach, how to run the code, and execute the tests.
- Use any additional libraries or tools you deem necessary.

*Submission:*

Your submission should include:

- A comprehensive design document covering both the low-level and high-level design challenges.
- A detailed proposal for the innovation challenge, potentially with diagrams and code snippets.
- A README file that articulates your design decisions and thought process.

Please submit your completed assignment within 7 days. Your innovative solutions and problem-solving approach will be crucial in our evaluation.

We are excited to see your work and look forward to the possibility of you joining our dynamic team.

**Git Strategy for Assignment**

1. **Initial Setup**:
   - Fork the provided GitHub repository (if applicable) or initialize a new repository on your preferred service (GitHub, GitLab, Bitbucket).
   - Keep the repository private and add me as a collborator using my email id: [tushar.langer@healthcatalyst.com](mailto:tushar.langer@healthcatalyst.com).
   - Clone the repository to your local machine to begin working on the assignment. 


2. **Branching**:
   - Create a new branch from the main/master branch for each major feature or part of the assignment (e.g., `feature-unique-activity-pattern`, `feature-pattern-search-mechanism`).
   - Use descriptive branch names that clearly state the feature or task you are working on.

3. **Committing**:
   - Make small, frequent commits with clear and detailed commit messages that explain what changes have been made and why.
   - This not only helps in keeping track of changes but also allows for easier code reviews.

4. **Testing**:
   - Commit tests and code separately where possible. Ensure all tests pass for each feature before merging your feature branch into the main branch.
   - Use a continuous integration tool to run your tests automatically upon each commit if possible.

5. **Merging and Pull Requests**:
   - Once a feature is complete and all tests pass, merge the feature branch back into your main branch.
   - Use pull requests for merging, even if you are the only one working in the repository. This is good practice and allows for code review and commentary.
   - Ensure that your main/master branch always has a working version of the project.

6. **Code Reviews**:
   - If possible, have a peer review your pull requests before merging to get feedback on your code.

7. **Documentation**:
   - Update the README.md file on your main/master branch with the necessary documentation on how to set up, run, and test your application.

8. **Submission**:
   - Once everything is complete, push all your changes to your remote repository.
   - Provide a link to the repository or a pull request for review by the hiring team.

9. **Tagging and Releases**:
   - Create a release tag in your repository with the final submission. This snapshot creates a point in the repository's history that can be easily referred to and downloaded.
   - Name the tag appropriately, for example, `submission-v1.0`.

10. **After Submission**:
    - Do not push any more changes to the submission tag after the assignment's due date, unless requested by the review team.

By following this strategy, candidates will demonstrate good practices in version control and organization, which are key skills for any Software Development Engineer. It is also recommended to include a `.gitignore` file to avoid committing unnecessary files to the repository.

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
  1. chmod +x ./backend/entrypoint.sh
  2. For running the project: docker-compose up -d –-build
  3. For checking logs &amp; troubleshooting: docker-compose logs -f
  4. For closing project: docker-compose down -v
  5. For running commands in the local containers:
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
