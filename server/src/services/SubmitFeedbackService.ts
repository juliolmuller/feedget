import IMailProvider from '../providers/IMailProvider';
import IFeedbackRepository from '../repositories/IFeedbackRepository';

export interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

class SubmitFeedbackService {
  constructor(
    private readonly feedbackRepository: IFeedbackRepository,
    private readonly mailProvider: IMailProvider,
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;
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
