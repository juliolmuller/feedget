import express from 'express';

import routes from './routes';

const PORT = process.env.PORT || 8082;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`);
});
