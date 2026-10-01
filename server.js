const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from AWS EKS - CI/CD Auto Deploy Success!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
