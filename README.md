# Personal Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Docker

This project includes Docker configuration for both development and production environments.

### Development

To run the application in development mode with Docker:

```bash
# Build with dev Dockerfile
docker build -f Dockerfile.dev -t portfolio-dev .

# Run the container
docker run -p 4200:4200 -v $(pwd):/app portfolio-dev
```

This will start the application in development mode with hot reload enabled. The application will be available at `http://localhost:4200`.

### Production with Caddy (HTTPS)

To deploy the production version with automatic HTTPS:

1. Edit the `Caddyfile` and replace `yourdomain.com` with your actual domain.

2. Run the Docker Compose stack:

```bash
docker-compose up -d
```

Caddy will automatically:
- Obtain and renew SSL certificates
- Redirect HTTP to HTTPS
- Proxy requests to your Angular app

Your site will be available at `https://yourdomain.com`.
