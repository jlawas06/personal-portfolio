# Use Node.js to serve the Angular application
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the Angular application
RUN npm run build

# Install a simple HTTP server
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Serve the built application
CMD ["http-server", "dist/personal-portfolio", "-p", "8080", "--cors",]