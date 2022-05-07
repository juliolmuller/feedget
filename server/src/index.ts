import express from 'express';

import { prisma } from './prisma';

const PORT = process.env.PORT || 8082;
const app = express();

app.use(express.json());

app.post('/feedbacks', async (req, res) => {
  const feedback = await prisma.feedback.create({
    data: {
      type: req.body.type,
      comment: req.body.comment,
      screenshot: req.body.screenshot,
    },
  });

  res.status(201).json(feedback);
});

app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`);
});
