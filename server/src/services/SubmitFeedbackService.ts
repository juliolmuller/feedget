import type IMailProvider from '../providers/IMailProvider';
import type IFeedbackRepository from '../repositories/IFeedbackRepository';

export interface SubmitFeedbackServiceRequest {
  comment: string;
  screenshot?: string;
  type: string;
}

class SubmitFeedbackService {
  public constructor(
    private readonly feedbackRepository: IFeedbackRepository,
    private readonly mailProvider: IMailProvider,
  ) {}

  public async execute(request: SubmitFeedbackServiceRequest): Promise<void> {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!comment) {
      throw new Error('Comment is required.');
    }

    if (typeof screenshot === 'string' && !screenshot.startsWith('data:image/png;base64,')) {
      throw new Error('Screenshot should be a base64 image URL.');
    }

    const feedback = await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailProvider.send({
      subject: 'Novo feedback',
      body: [
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
  }
}

export default SubmitFeedbackService;
