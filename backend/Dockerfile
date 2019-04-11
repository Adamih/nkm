# Dockerfile-flask
# We simply inherit the Python 3 image. This image does
# not particularly care what OS runs underneath
FROM python:3
# Copy the requirements file in order to install
# Python dependencies

COPY requirements.pip .
# Install Python dependencies

RUN pip install -r requirements.pip
# We copy the rest of the codebase into the image
