# Stage 1: Build the React application
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built application
FROM nginx:alpine

# Copy the build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional, using default for now)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]