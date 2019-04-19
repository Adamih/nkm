# Dockerfile-flask
# We simply inherit the Python 3 image. This image does
# not particularly care what OS runs underneath
FROM python:3.6-alpine
# Copy the requirements file in order to install
# Python dependencies

RUN apk add postgresql-dev gcc python3-dev musl-dev

COPY requirements.pip .
# Install Python dependencies

RUN pip install -r requirements.pip

# We copy the rest of the codebase into the image
