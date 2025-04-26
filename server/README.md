# Portfolio Contact Form Server

This server handles sending emails from the portfolio contact form using Gmail SMTP.

## Setup

1. Create a `.env` file in the server directory with the following variables:
```
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECIPIENT=johnlloydlawas06@gmail.com
```

2. For `EMAIL_PASS`, you need to generate an App Password from your Google account:
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled
   - Go to App passwords
   - Select "Other" from the dropdown and give it a name like "Portfolio Contact Form"
   - Use the generated 16-character password in your `.env` file

3. Install dependencies:
```
npm install
```

4. Start the server:
```
npm start
```

For development:
```
npm run dev
```

The server will run on port 3000 by default or the port specified in your `.env` file. 