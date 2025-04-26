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

### Docker Setup for Email Server

The project now includes Docker support for the email server:

1. Create a `.env` file in the `server` directory with your email configuration:
```
PORT=3000
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECIPIENT=recipient-email@example.com
```

2. Deploy the full stack (Angular app, email server, and Caddy):
```bash
docker-compose up -d
```

This will:
- Build and start the Angular frontend
- Build and start the email server
- Configure Caddy to route API requests to the server

Caddy will route all `/api/*` requests to the email server and all other requests to the Angular app.

# Portfolio with Contact Form

This project includes a contact form that uses Gmail SMTP for sending emails.

## Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

The Angular app will run with a configured proxy that forwards API requests to the backend server.

## Backend Email Server Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install server dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECIPIENT=johnlloydlawas06@gmail.com
```

4. For `EMAIL_PASS`, you need to generate an App Password from your Google account:
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled
   - Go to App passwords
   - Select "Other" from the dropdown and give it a name like "Portfolio Contact Form"
   - Use the generated 16-character password in your `.env` file

5. Start the server:
```bash
npm start
```

## Development Workflow

1. Start the backend server in one terminal:
```bash
cd server
npm start
```

2. Start the Angular development server in another terminal:
```bash
npm start
```

The Angular app will run at http://localhost:4200 and proxy API requests to the backend at http://localhost:3000.

## Production Deployment

For production, you can:

1. Build the Angular app:
```bash
npm run build
```

2. Serve both the frontend and backend together:
   - Either configure a proxy in your web server (Nginx/Apache)
   - Or modify the backend to serve the Angular static files

## Contact Form Endpoint

The contact form API endpoint is at:
```
/api/send-email
```

The server uses nodemailer with Gmail SMTP.
