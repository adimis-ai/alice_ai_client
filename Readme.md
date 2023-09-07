# Alice Client

Alice Client is a React-based web application that provides a user interface for interacting with the Alice chatbot. It allows users to log in and engage in conversations with the chatbot, as well as make various API calls.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)

## Getting Started

Follow these instructions to set up and run the Alice Client locally on your development machine.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/your-username/alice-client.git
   ```

2. Navigate to the project directory:

   ```shell
   cd alice-client
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

### Configuration

The application relies on environment variables for configuration. Create a `.env` file in the project root directory and set the following variables:

```env
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
REACT_APP_API_URL=http://127.0.0.1:8000/chatbot
```

Make sure to replace `your-auth0-domain` and `your-auth0-client-id` with your Auth0 credentials.

### Usage

To run the application locally, use the following command:

```shell
npm start
```

The application will start, and you can access it in your web browser at `http://localhost:3000`.