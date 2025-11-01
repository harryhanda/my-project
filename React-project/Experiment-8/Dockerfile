# Use an official Node.js image to build the app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
