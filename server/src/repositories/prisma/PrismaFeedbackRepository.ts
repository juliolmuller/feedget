import { prismaClient } from '../../database';
import { type Feedback } from '../../database/prisma';
import { type ICreateRepositoryData } from '../IFeedbackRepository';
import type IFeedbackRepository from '../IFeedbackRepository';

class PrismaFeedbackRepository implements IFeedbackRepository {
  public async create(data: ICreateRepositoryData): Promise<Feedback> {
    const { type, comment, screenshot } = data;
    const feedback = await prismaClient.feedback.create({
      data: { type, comment, screenshot },
    });

    return feedback;
  }
}

export default PrismaFeedbackRepository;
