# Web Security API

A simple REST API built with **Node.js** and **Express.js** that provides educational information about common web security vulnerabilities.

## Features

- Simple Express.js backend
- JSON responses
- Two API endpoints
- Tested using Browser and curl

## Endpoints

### GET /

Returns information about the API.

Example Response

```json
{
  "name": "Web Security API",
  "version": "1.0.0",
  "description": "Educational API for common web security concepts."
}
```

---

### GET /vulnerability

Returns information about a common web vulnerability.

Example Response

```json
{
  "name": "SQL Injection",
  "owasp": "A03:2021 - Injection",
  "severity": "Critical",
  "prevention": "Use parameterized queries and input validation."
}
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/web-security-api.git
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node index.js
```

## Testing

Browser:

```
http://localhost:3000/
http://localhost:3000/vulnerability
```

curl:

```bash
curl http://localhost:3000/
curl http://localhost:3000/vulnerability
```

## Tech Stack

- Node.js
- Express.js
- JavaScript

## Author

le0vip3r
