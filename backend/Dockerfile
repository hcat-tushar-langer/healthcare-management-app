# Use a more recent Python Alpine image
FROM python:3.8.12-alpine3.14

# Set work directory
WORKDIR /usr/src/app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install OS-level dependencies
RUN apk --no-cache add postgresql-dev gcc python3-dev musl-dev

# Copy and install Python dependencies
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy entrypoint script and set executable permissions
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh

# Copy the rest of the project
COPY . /usr/src/app/

# Define the entry point
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
