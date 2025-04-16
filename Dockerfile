# Stage 1: Build the Angular application
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve with a lightweight Node server
FROM node:20-alpine

WORKDIR /app

# Install a simple HTTP server
RUN npm install -g serve@14.2.1

# Copy the build from the previous stage
COPY --from=build /app/dist/personal-portfolio/browser /app

# Start the server
CMD ["serve", "-s", ".", "-l", "80"] 