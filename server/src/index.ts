import express from 'express';

const PORT = process.env.PORT || 8082;
const app = express();

app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`);
});
