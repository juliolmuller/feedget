import prisma from '../../prisma';
import IFeedbackRepository, {
  ICreateRepositoryData,
} from '../IFeedbackRepository';

class PrismaFeedbackRepository implements IFeedbackRepository {
  async create(data: ICreateRepositoryData) {
    const { type, comment, screenshot } = data;
    const feedback = await prisma.feedback.create({
      data: { type, comment, screenshot },
    });

    return feedback;
  }
}

export default PrismaFeedbackRepository;
