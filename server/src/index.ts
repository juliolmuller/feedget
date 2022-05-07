import express from 'express';
import nodemailer from 'nodemailer';

import { prisma } from './prisma';

const PORT = process.env.PORT || 8082;
const app = express();
const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '7e3086996be235',
    pass: 'ebb4a7f7093560',
  },
});

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
  transport.sendMail({
    from: 'Feedback <noreply@feedget.com>',
    to: 'Suporte <support@feedget.com>',
    subject: 'Novo feedback',
    html: [
      `<h1 style="font-family: sans-serif;">🚀 Novo feedback</h1>`,
      '<table style="border-spacing: 20px 8px; font-family: sans-serif; text-align: left;">',
      '<tr>',
      '<th>ID</th>',
      `<td>${feedback.id}</td>`,
      '</tr>',
      '<tr>',
      '<th>Tipo de feedback</th>',
      `<td>${feedback.type}</td>`,
      '</tr>',
      '<tr>',
      '<th>Comentário</th>',
      `<td>${feedback.comment}</td>`,
      '</tr>',
      ...[
        feedback.screenshot
          ? [
              '<tr>',
              '<th>Screenshot</th>',
              `<td><img src="${feedback.screenshot}" /></td>`,
              '</tr>',
            ]
          : [],
      ],
      '</table>',
    ].join(''),
  });
});

app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`);
});
