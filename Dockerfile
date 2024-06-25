# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package.json package-lock.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN npm run build:main

# Make port 3000 available to the outside of the Docker container
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]