# 🧪 Keploy API Testing 

This project demonstrates AI-powered API testing using [Keploy](https://keploy.io) on a simple Node.js Express API with OpenAPI integration and GitHub Actions CI/CD.

📸 Keploy Test Report (Screenshot)
📷 Screenshot showing test results
📍 Below is a screenshot of the test report from keploy-report/results.json:
![Test Report Screenshot](./screenshot1.png)

---

## 📦 API Endpoints

- `GET /hello`  
  Returns: `{ "message": "Hello, world!" }`

- `POST /greet`  
  Body: `{ "name": "YourName" }`  
  Returns: `{ "message": "Hello, YourName" }`

---

## 📝 OpenAPI Specification

OpenAPI schema is defined in [`openapi.yaml`](./openapi.yaml) covering both endpoints.

---

## 🚀 Run Locally

```bash
npm install
npm start
Test endpoints:

bash
Copy
Edit
curl http://localhost:3000/hello
curl -X POST http://localhost:3000/greet -H "Content-Type: application/json" -d '{"name": "Shikhar"}'
🧪 Keploy API Testing
Due to limitations on Windows OS, keploy record and test were not supported natively.
Instead, tests were manually triggered using curl and a simulated test report was created.


⚙️ CI/CD Integration
Keploy was integrated into GitHub Actions using a custom workflow (.github/workflows/ci.yml).
It builds the app and runs Keploy tests using Docker (Linux-only support).

🛠 Tech Stack
Node.js

Express.js

Keploy CLI

OpenAPI 3.0

Docker (for CI)

GitHub Actions (CI/CD)

📂 Project Structure
pgsql
Copy
Edit
keploy-api-test/
├── index.js
├── package.json
├── openapi.yaml
├── Dockerfile
├── .gitignore
├── README.md
├── test-screenshot.png      ← Your screenshot goes here
├── keploy-report/
│   └── results.json
└── .github/
    └── workflows/
        └── ci.yml
