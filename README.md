# ItemManager

This is a simple Express.js and MongoDB RESTful API for managing items. It provides CRUD (Create, Read, Update, Delete) operations on a collection in a MongoDB database. The API is secured with JWT authentication and implements basic error handling.

## Features

- User signup and login with JWT authentication
- Retrieve all items or get a specific item by ID
- Create a new item
- Update an existing item by ID
- Delete an item by ID

## Getting Started

- Clone the repository:
- Install the dependencies:
- - "cd ItemManager"
- - "npm install"
- Start the server:
- - node index.js
- The API will be available at http://localhost:8000/api.
- Use `Postman`, a popular API development and testing tool, to interact with the endpoints of this API.
  
## API Documentation

### Authentication

- `POST /api/auth/signup` - Create a new user account. Requires a JSON body with "username" and "password" fields.
- `POST /api/auth/login` - Log in with an existing user account. Requires a JSON body with "username" and "password" fields. Returns a JWT token for authentication.

### Item Endpoints

- `GET /api/items` - Retrieve all items.
- `GET /api/items/:id` - Retrieve a specific item by ID.
- `POST /api/items` - Create a new item. Requires a JSON body with "name" and "description" fields.
- `PUT /api/items/:id` - Update an existing item by ID. Requires a JSON body with "name" and "description" fields.
- `DELETE /api/items/:id` - Delete an item by ID.

`Note`: All item endpoints require a valid JWT token in the request header for authentication. Include the token in the `Authorization` header as `Bearer <token>`

## Built With

- Express.js - Fast, unopinionated web framework for Node.js
- MongoDB - NoSQL database
- Passport - Authentication middleware for Node.js
- JWT - JSON Web Token implementation for Node.js
