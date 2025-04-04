export interface SendMailData {
  body: string;
  subject: string;
}

interface IMailProvider {
  send: (data: SendMailData) => Promise<void>;
}

export default IMailProvider;
