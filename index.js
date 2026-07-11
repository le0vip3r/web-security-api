const express = require("express");

const app = express();
const PORT = 3000;

// Home endpoint
app.get("/", (req, res) => {
  res.json({
    name: "Web Security API",
    version: "1.0.0",
    description: "Educational API for common web security concepts."
  });
});

// Vulnerability endpoint
app.get("/vulnerability", (req, res) => {
  res.json({
    name: "SQL Injection",
    owasp: "A03:2021 - Injection",
    severity: "Critical",
    description: "Occurs when untrusted user input is interpreted as SQL commands.",
    prevention: [
      "Use parameterized queries",
      "Validate user input",
      "Apply least privilege"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});