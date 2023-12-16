const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5005;

app.use(bodyParser.json());
app.use(cors());

const validCredentials = {
  email: "robbie@topnotchfence.com",
  password: "T$3qR#p9xZ", 
};

console.log(validCredentials.email, validCredentials.password);

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Received email:", email);
  console.log("Received password:", password);

  if (email === validCredentials.email && password === validCredentials.password) {
    // Authentication successful
    console.log("Authentication successful");
    res.status(200).send("Authentication successful");
  } else {
    // Authentication failed
    console.log("Authentication failed");
    res.status(401).send("Authentication failed");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
