const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Middleware for parsing JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from ECS Fargate!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Service is healthy' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});