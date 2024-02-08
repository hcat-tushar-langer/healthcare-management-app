# Introduction

As a leading healthcare technology company, we are constantly on the lookout for exceptional talent to join our team. This take-home assignment is designed to assess your technical skills, problem-solving abilities, and innovative thinking. It consists of two main parts: the Core Functionality Tasks and the Bar Raiser Challenges. Please find the assignment at <https://github.com/hcat-tushar-langer/healthcare-management-app/> and please reach out to <tushar.langer@healthcatalyst.com> for any doubts.

## Core Functionality Tasks

Implement an end to end application features leveraging any framework / language or technology for the following tasks:
### <a name="_toc158297466"></a>Update profile details
1. Implement a dialog to update profile details of the user.
1. Implement a dialog to update  user password enhanced security.
### <a name="_toc158297467"></a>Unique Activity Pattern Analyzer - `findUniqueActivityPatternLength`
1. Implement an end to end application features leveraging any framework / language or technology using this algorithm.
1. This feature should analyse a string of user access actions and determine the length of the longest sequence where all actions are unique.
1. Write unit tests to validate the functionality against various scenarios.
1. The feature code should operate with a time complexity of O(n).
### <a name="_toc158297468"></a>Efficient Pattern Search Mechanism - `findPatternOccurrences`
1. Implement an end to end application features leveraging any framework / language or technology using this algorithm.
1. This feature should give the users a count of the occurrences of a pattern within a larger text.
1. Write unit tests to validate the functionality against various scenarios.
1. The feature code should operate with a time complexity of O(n).

## <a name="_toc158297469"></a>Bar Raiser Challenges

1. Introduce a new feature, microservice, or frontend improvement of any framework of your choice.
1. Develop an upgrade plan for migrating services to their latest versions.
1. Design an end-to-end testing suite to bolster application reliability.
1. Performance Optimization: Focus on enhancing system efficiency by streamlining code, optimizing databases, and implementing caching. Aim to boost speed and scalability while reducing load times.
   
## <a name="_toc158297470"></a>Help Section
1. Thoroughly go through the readme file to understand the project.
1. Set up the codebase on your local machine. You need Docker and Python for that.
1. Read the documentation to set up the local environment and understand the technicalities of the project.
1. Implement any service (including UI) of your choice in the same application ecosystem and codebase. For example, React, NodeJS, Springboot, mongodb etc.
1. Ensure that the app works in both development and production environments
1. If you need help or have any doubts, reach out to me at my email and set up a 15 min call to keep moving forward. I am here to help.
1. Hint: `findUniqueActivityPatternLength` - This functionality could utilize an algorithm to monitor the mouse movements of our users. Specifically, we can record four types of mouse actions: a left click represented by the string 'A', a right click by 'B', scrolling up by 'C', and scrolling down by 'D'. By tracking and storing these events, we can then display the longest distinct pattern of activity for each user within the user interface. You can extend this funcationality to make it more robust or use any other ideas for user activity tracking.
1. Use your understanding from  from build a feature for `findUniqueActivityPatternLength`to implement other features for `findUniqueActivityPatternLength and Bar Raiser Challanges

## <a name="_toc158297471"></a>Expectations
1. Produce clean, maintainable, and well-documented code.
1. Include a README explaining your approach, how to run the code, and execute the tests.
1. Use any additional libraries or tools you deem necessary.

## <a name="_toc158297472"></a>Submission

Your submission should include:

1. A comprehensive design document covering both the low-level and high-level design challenges.
1. A detailed proposal for the innovation challenge, potentially with diagrams and code snippets.
1. A README file that articulates your design decisions and thought process.
1. Please submit your completed assignment within 7 days. Your innovative solutions and problem-solving approach will be crucial in our evaluation.
1. We are excited to see your work and look forward to the possibility of you joining our dynamic team.

## <a name="_toc158297473"></a>Git Strategy for Assignment
### <a name="_toc158297474"></a>Initial Setup
1. Fork the provided GitHub repository (if applicable) or initialize a new repository on your preferred service (GitHub, GitLab, Bitbucket).
1. Keep the repository private and add me as a collaborator using my email id: <tushar.langer@healthcatalyst.com>
1. Clone the repository to your local machine to begin working on the assignment. 
### <a name="_toc158297475"></a>Branching 
1. Create a new branch from the main/master branch for each major feature or part of the assignment (e.g., `feature-unique-activity-pattern`, `feature-pattern-search-mechanism`).
1. Use descriptive branch names that clearly state the feature or task you are working on.
### <a name="_toc158297476"></a>Committing
1. Make small, frequent commits with clear and detailed commit messages that explain what changes have been made and why.
1. This not only helps in keeping track of changes but also allows for easier code reviews.
### <a name="_toc158297477"></a>Testing
1. Commit tests and code separately where possible. Ensure all tests pass for each feature before merging your feature branch into the main branch.
1. Use a continuous integration tool to run your tests automatically upon each commit if possible.
### <a name="_toc158297478"></a>Merging and Pull Requests
1. Once a feature is complete and all tests pass, merge the feature branch back into your main branch.
1. Use pull requests for merging, even if you are the only one working in the repository. This is good practice and allows for code review and commentary.
1. Ensure that your main/master branch always has a working version of the project.
### <a name="_toc158297479"></a>Code Reviews
1. If possible, have a peer review your pull requests before merging to get feedback on your code.
###<a name="_toc158297480"></a>Documentation
1. Update the README.md file on your main/master branch with the necessary documentation on how to set up, run, and test your application.

### <a name="_toc158297481"></a>Submission
1. Once everything is complete, push all your changes to your remote repository.
1. Provide a link to the repository or a pull request for review by the hiring team.
### <a name="_toc158297482"></a>Tagging and Releases
1. Create a release tag in your repository with the final submission. This snapshot creates a point in the repository's history that can be easily referred to and downloaded.
1. Name the tag appropriately, for example, `submission-v1.0`.
### <a name="_toc158297483"></a>After Submission
1. Do not push any more changes to the submission tag after the assignment's due date, unless requested by the review team.

By following this strategy, candidates will demonstrate good practices in version control and organization, which are key skills for any Software Development Engineer. It is also recommended to include a `.gitignore` file to avoid committing unnecessary files to the repository.
## <a name="_toc158297484"></a>Healthcare Management Application
Your healthcare management application project is a comprehensive system built using modern technologies and is designed to be robust, scalable, and secure. The choice of technologies and tools, such as Angular for the frontend, Django Rest Framework for the backend, PostgreSQL and MySQL for databases, and Docker for containerization, is well-suited for developing a healthcare application that requires secure, efficient, and easy-to-maintain solutions. 

Here are some insights and advice on best practices for your project:
### <a name="_toc158297485"></a>Security Practices
Given the sensitive nature of healthcare data, ensuring data protection and compliance with healthcare regulations (like HIPAA in the United States) is crucial. Implementing secure authentication and authorization mechanisms, such as OAuth2 and JWT for token-based authentication, is a good start. Encryption of data at rest and in transit should also be considered essential. Regular security audits and code reviews can help identify and mitigate vulnerabilities.

### <a name="_toc158297486"></a>Continuous Integration/Continuous Deployment (CI/CD)
Automating the deployment process using CI/CD pipelines can significantly improve the efficiency and reliability of deploying updates to your application. Tools like Jenkins, GitLab CI/CD, or GitHub Actions can automate testing, building, and deploying your application, ensuring that changes are seamlessly integrated and deployed with minimal manual intervention.

### <a name="_toc158297487"></a>Testing Strategies
Adopt a comprehensive testing strategy that includes unit tests, integration tests, and end-to-end tests. This ensures that individual components work as expected, integrate correctly, and the entire application functions as intended from the user's perspective. For Angular applications, tools like Jasmine and Karma are great for unit and integration testing, while Protractor can be used for end-to-end testing. For Django, the built-in test framework is powerful for creating a wide range of tests.
### <a name="_toc158297488"></a>Scalability and Performance Optimization
Consider using caching mechanisms and a Content Delivery Network (CDN) to improve the responsiveness of your application. Django offers various caching options that can significantly reduce database query times. For Angular applications, lazy loading modules can improve initial load times by splitting the application into multiple bundles and loading them on demand.
### <a name="_toc158297489"></a>Database Management
Given that you support both PostgreSQL and MySQL, ensure that your ORM (Object-Relational Mapping) queries are optimized and database schemas are properly indexed to handle large datasets efficiently. Regularly monitor the database performance and consider replication or sharding for scalability if necessary.

### <a name="_toc158297490"></a>Documentation and Code Quality
Maintain comprehensive documentation for your API endpoints, database schemas, and deployment procedures. This not only helps in onboarding new developers but also serves as a reference for the maintenance team. Adhering to coding standards and using tools like linters and formatters can help maintain code quality.

### <a name="_toc158297491"></a>Responsive Design
Since the application is web-based and designed to be responsive, continually test and optimize the user interface across various devices and browsers to ensure a consistent and accessible user experience. Angular Material offers a wide range of UI components that adhere to Material Design principles and are designed to be responsive and customizable.

### <a name="_toc158297492"></a>Use of Docker and Containerization
Your approach to using Docker for both development and production environments is commendable. It ensures consistency across different environments and simplifies the deployment process. Make sure to keep your Docker images lightweight by minimizing the number of layers and removing unnecessary dependencies. Also, consider using Docker Composes override feature to manage differences between development, staging, and production configurations more effectively.

Lastly, staying up-to-date with the latest versions of the technologies you're using can help leverage new features and improvements while ensuring your application remains secure and efficient.
## <a name="_toc158297493"></a>Summary
This project has API endpoints for login, register, healthcare data built in Angular 8 i.e. single page application with material design principals and Django Rest Framework with PostgreSQL &amp; MySQL support.

This application has validations for login, register as well as search and sort functionality for healthcare data view along with a separate one to one view for each healthcare.

This web application is completely responsive.

### <a name="_toc158297494"></a>Technologies used

1. Python 3,
1. Angular 8,
1. Django Rest Framework,
1. PostgreSQL
1. MySQL
1. Docker
### <a name="_toc158297495"></a>Requirements for running the project in local machine
1. Python
1. Docker

### <a name="_toc158297496"></a>Running project on local machine
#### *Running in Development environment*
1. Run chmod +x ./backend/entrypoint.sh
1. Run project: docker-compose up -d –-build
1. Checking logs &amp; troubleshooting: docker-compose logs -f
1. Closing project: docker-compose down -v
1. Run commands in the local containers:
   1. docker-compose exec [container name] [command]
   1. docker-compose exec backend python manage.py createsuperuser
   1. docker-compose exec backend python manage.py makemigrations
   1. docker-compose exec backend python manage.py migrate
#### *Running in Production environment*
1. Run chmod +x ./backend/entrypoint.sh
1. Run project: docker-compose -f docker-compose.prod.yml up -d –build
1. Check logs &amp; troubleshooting: docker-compose -f docker-compose.prod.yml logs -f
1. Close project: docker-compose -f docker-compose.prod.yml down -v
1. Run commands in the local containers:
   1. docker-compose -f docker-compose exec [container name] [command]
   1. docker-compose -f docker-compose exec backend python manage.py createsuperuser
   1. docker-compose -f docker-compose exec backend python manage.py makemigrations
   1. docker-compose -f docker-compose exec exec backend python manage.py migrate
### <a name="_toc158297497"></a>Routes & Endpoints | Development environment
1. Angular Frontend: localhost:4201
1. Django Rest Framework Backend: localhost:8000
   1. Admin Dashboard: localhost:8000/api/v1/admin
   1. Authentication endpoint: localhost:8000/api/v1/auth-token
   1. User endpoint: localhost:8000/api/v1/healthcare/users
   1. Healthcare endpoint: localhost:8000/api/v1/healthcare/profile
   1. Postgres: localhost:5050
      1. Login details | username: admin@healthcare.com | password: admin
      1. Click on add a new server and fill the following details
      1. General Tab || Name: database
      1. Connection Tab || Host: database | username: app | password: app

### <a name="_toc158297498"></a>Routes & Endpoints | Production environment
1. Angular Frontend: localhost
1. Django Rest Framework: localhost/api
   1. Admin Dashboard: localhost/api/v1/admin
   1. Authentication endpoint: localhost/api/v1/auth-token
   1. User endpoint: localhost/api/v1/healthcare/users
   1. Healthcare endpoint: localhost/api/v1/healthcare/profile
   1. Postgres: localhost/pgadmin
   1. Login details | username: admin@healthcare.com | password: admin
      1. Click on add a new server and fill the following details
      1. General Tab || Name: database
      1. Connection Tab || Host: database | username: app | password: app

### <a name="_toc158297499"></a>Dummy Data Ingestion

1. Sign up on the app and identify the user id from the api end point api/v1/healthcare/users
1. In the dummy-data.json, ensure the users: [] has the user id in it.
1. In post-data.py script, ensure that the apr\\_url matches the healthcare/profile endpoint.
1. Run post-data.py script that is in the post-data-script directory.
1. Refresh the dashboard/login to the dashboard
