# Simple Backend Template

This is a template project for backend development using Typescript, Node.js, Express, Mongoose, Bcrypt, JWT, NodeMailer, Multer, ESLint, and Prettier. The aim is to reduce setup time for new backend projects.

## Features

- **Authentication API:** Complete authentication system using JWT for secure token-based authentication and bcrypt for password hashing.
- **File Upload:** Implemented using Multer with efficient file handling and short-term storage.
- **Data Validation:** Robust data validation using Zod and Mongoose schemas.
- **Code Quality:** Ensured code readability and quality with ESLint and Prettier.
- **Email Service:** Sending emails through NodeMailer.
- **File Handling:** Efficient file deletion using `fs.unlink`.
- **Environment Configuration:** Easy configuration using a `.env` file.
- **Logging:** Logging with Winston and file rotation using DailyRotateFile.
- **API Request Logging:** Logging API requests using Morgan.

## Tech Stack

- Typescript
- Node.js
- Express
- Mongoose
- Bcrypt
- JWT
- NodeMailer
- Multer
- ESLint
- Prettier
- Winston
- Daily-winston-rotate-file
- Morgen
- Socket

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Create a `.env` file:**

   In the root directory of the project, create a `.env` file and add the following variables. Adjust the values according to your setup.

   ```env
  # Basic
NODE_ENV=development
DATABASE_URL=mongodb://127.0.0.1:27017/demo_app
IP_ADDRESS=192.168.1.10
PORT=5000

# Bcrypt
BCRYPT_SALT_ROUNDS=12

# JWT
JWT_SECRET=demo_jwt_secret_key
JWT_EXPIRE_IN=365d

# Email
EMAIL_FROM=demo.sender@example.com
EMAIL_USER=demo.sender@example.com
EMAIL_PASS=abcd efgh ijkl mnop
EMAIL_PORT=587
EMAIL_HOST=smtp.gmail.com

# Super Admin
SUPER_ADMIN_PASSWORD=demo123456
SUPER_ADMIN_EMAIL=admin@example.com

# Stripe
STRIPE_API_SECRET=sk_test_demo_secret_key_1234567890
WEBHOOK_SECRET=whsec_demo_webhook_secret_9876543210
   ```

4. **Run the project:**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn run dev
   ```

### Running the Tests

Explain how to run the automated tests for this system.

```bash
npm test
```
