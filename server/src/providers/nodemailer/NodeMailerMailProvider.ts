import nodemailer, { Transporter } from 'nodemailer';

import IMailProvider, { SendMailData } from '../IMailProvider';

class NodeMailerMailProvider implements IMailProvider {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(data: SendMailData) {
    const { subject, body } = data;

    await this.transporter.sendMail({
      from: 'Feedback <noreply@feedget.com>',
      to: 'Suporte <support@feedget.com>',
      subject,
      html: body,
    });
  }
}

export default NodeMailerMailProvider;
