import { Router } from 'express';

import NodeMailerMailProvider from './providers/nodemailer/NodeMailerMailProvider';
import PrismaFeedbackRepository from './repositories/prisma/PrismaFeedbackRepository';
import SubmitFeedbackService from './services/SubmitFeedbackService';

const routes = Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedbackRepository = new PrismaFeedbackRepository();
  const mailAdapter = new NodeMailerMailProvider();
  const submitFeedbackService = new SubmitFeedbackService(
    feedbackRepository,
    mailAdapter,
  );

  await submitFeedbackService.execute({ type, comment, screenshot });

  res.status(201).send();
});

export default routes;
