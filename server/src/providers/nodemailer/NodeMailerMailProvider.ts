import nodemailer, { Transporter } from 'nodemailer';

import IMailProvider, { SendMailData } from '../IMailProvider';

class NodeMailerMailProvider implements IMailProvider {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: Number(process.env.MAILTRAP_PORT),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
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
