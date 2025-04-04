import { type Feedback } from '@prisma/client';

import prisma from '../../prisma';
import { type ICreateRepositoryData } from '../IFeedbackRepository';
import type IFeedbackRepository from '../IFeedbackRepository';

class PrismaFeedbackRepository implements IFeedbackRepository {
  async create(data: ICreateRepositoryData): Promise<Feedback> {
    const { type, comment, screenshot } = data;
    const feedback = await prisma.feedback.create({
      data: { type, comment, screenshot },
    });

    return feedback;
  }
}

export default PrismaFeedbackRepository;
