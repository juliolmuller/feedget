export interface FeedbackEntity {
  id: string;
  type: string;
  comment: string;
  screenshot: string | null;
}

export interface ICreateRepositoryData {
  type: string;
  comment: string;
  screenshot?: string;
}

interface IFeedbackRepository {
  create(data: ICreateRepositoryData): Promise<FeedbackEntity>;
}

export default IFeedbackRepository;
