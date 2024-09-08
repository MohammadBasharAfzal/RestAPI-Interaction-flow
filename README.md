# RestAPI-Interaction-flow
An interaction between multiple webpages to get hands-on with RestAPI interaction and its flow.

# Project Summary: Sleep Assessment App
The Sleep Assessment App is a web-based application that allows users to sign up and go through a series of questions related to their sleep habits. After completing the assessment, users can see a summary of their responses on the results page. This app is built using HTML, CSS, JavaScript for the frontend, and Node.js and Express.js for the backend, with a MySQL database to store user information and assessment data.

# Project Flow:
Sign-up Page (signup.html):

Users sign up with a nickname and password. After successful registration, they are redirected to the first assessment page.
Backend API for user sign-up: POST /api/signup.
Assessment Screens (screen1.html to screen4.html):

The app consists of a series of questions presented on different screens (e.g., sleep issues, bedtime, wake-up time, sleep hours).
Each screen submits the user’s input to the backend and navigates to the next question upon success.
Backend API for each assessment screen:
    1. Screen 1: POST /api/screen1
    2. Screen 2: POST /api/screen2
    3. Screen 3: POST /api/screen3
    4. Screen 4: POST /api/screen4
    5. Results Page (results.html)

After completing the assessment, users are redirected to the results page, where they can see a summary of their responses.
Backend API for fetching results: GET /api/results.

# Project Structure (for understanding)

sleep-app/
│
├── backend/                    # Backend folder
│   ├── controllers/            # Contains business logic for each API route
│   ├── models/                 # Database models (MySQL queries)
│   ├── routes/                 # API routes (signup, screen1-4, results)
│   ├── middleware/             # Middleware (e.g., authentication checks)
│   ├── config/                 # Configuration files (e.g., database setup)
│   ├── app.js                  # Main Express app setup
│   ├── server.js               # Entry point for the server
│   └── package.json            # Backend dependencies and scripts
│
├── frontend/                   # Frontend folder (HTML, JS, CSS)
│   ├── public/                 # Public assets (e.g., index.html)
│   ├── src/                    # Main frontend files
│   │   ├── components/         # Reusable frontend components
│   │   ├── pages/              # Pages (signup, screen1-4, results)
│   │   ├── services/           # API calls (fetch functions for each screen)
│   │   ├── App.js              # Main app component (React)
│   │   └── index.js            # Entry point for React app
│
├── .env                        # Environment variables (e.g., JWT secret, DB credentials)
└── README.md                   # Project documentation

You can use the '.env' file to declare enviroment variables.

# How to Run the Project:

1. Clone the Repository:

git clone https://github.com/your-repo/sleep-app.git
cd sleep-app

1. Setup the Backend:

Install Node.js dependencies:
cd backend
npm install

Configure environment variables:
    Create a .env file in the backend/ directory and add your MySQL connection details:

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=sleep_app
    JWT_SECRET=your_secret

Run the Backend Server:
npm start
The backend will start on http://localhost:5001.

1. Setup the Frontend:

For plain HTML/JS: Simply open the frontend/public/index.html file in a browser to view the app.

Go to the Sign-up page (/signup.html).
Enter a nickname and password and submit the form.
Take the Assessment:

After sign-up, you will be directed through a series of screens asking about your sleep habits.
Complete each screen and proceed to the next.

View Results:
After completing the assessment, the results page will display your responses.
