export interface SendMailData {
  subject: string;
  body: string;
}

interface IMailProvider {
  send: (data: SendMailData) => Promise<void>;
}

export default IMailProvider;
