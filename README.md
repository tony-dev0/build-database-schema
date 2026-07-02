# Build Database Schema

A simple backend service built with MongoDB and Mongoose to define and manage a user data model.

## Overview

This project demonstrates a Mongoose-based data model service using MongoDB for persistence. The service includes:

- A `User` schema defined in `models/User.js`
- A MongoDB connection helper in `config/db.js`
- Environment-driven configuration via `.env`

## Features

- User fields: `firstname`, `lastname`, `username`, `email`, `password` and `createdAt`
- Field validation using Mongoose schema rules
- Role enumeration with default value `user`
- Refresh token support as an array of strings

## Installation

```bash
cd build-database-schema
npm install
```

## Configuration

Create a `.env` file in the project root with your MongoDB connection string, or copy the provided example:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/dbname
```

## Usage

Import and use the connection helper in your app entry point:

```js
const connectDB = require("./config/db");

connectDB();
```

Then use the `User` model to interact with the database:

```js
const User = require("./models/User");

const user = await User.create({
  firstname: "Jane",
  lastname: "Doe",
  username: "janedoe",
  email: "jane@example.com",
  password: "secret123",
  createdAt: new Date().toISOString(),
});
```

## Project Structure

- `config/db.js` — MongoDB connection logic
- `models/User.js` — Mongoose user model schema
- `.env.example` — example environment variables
- `package.json` — project dependencies

## Dependencies

- `mongoose` — MongoDB object modeling
- `dotenv` — environment variable loading

## Notes

- Ensure `MONGO_URI` is set before starting the app
- `createdAt` is stored as a string in this schema; consider using `Date` for timestamp behavior
