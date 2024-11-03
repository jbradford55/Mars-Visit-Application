Mars Visit Application
This is a Next.js project that allows users to apply for a visit to Mars! Users can enter their personal details, travel preferences, and health information. Once submitted, the application sends a confirmation email.

Live Demo
Check out the live version of the site here: Live Mars Visit Application

Getting Started
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Set up environment variables:

Create a .env.local file at the root of the project and add the following:

plaintext
Copy code
EMAIL_USER=<your_email>
EMAIL_PASSWORD=<your_email_password>
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 with your browser to view the application.

Folder Structure
/components - Contains reusable components such as form stages.
/pages - Next.js pages, including the main form and API routes.
/api - API routes for handling form submissions and sending confirmation emails.
Technologies Used
Next.js - The React framework for building server-rendered applications.
Nodemailer - Used for sending confirmation emails.
React Hook Form - For form validation and management.
Learn More
To learn more about Next.js, check out:

Next.js Documentation - Comprehensive documentation for Next.js.
Next.js GitHub repository
Deploy on Vercel
The easiest way to deploy this Next.js app is on Vercel. Check out the Next.js deployment documentation for more details.

